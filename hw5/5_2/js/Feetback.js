function Feetback(id, id_coment, text) {
	Container.call(this, 'render');
	this.id = id;
	this.id_coment = id_coment;
	this.text = text;
	this.ajax();
}

Feetback.prototype = object.create(Container.prototype);
Feetback.prototype.constructor = Feetback;

Feetback.prototype.render = function(){
	var result = "";
	result +='<ul>';
	result += '<li id="this.id"> id = '+ this.id;
	result += '<li id="this.id_coment"> id_coment = '+ this.id_coment;
	result += '<li id="this.text"> text = '+ this.text;


	result +='</ul>';

	return result;

};
Feetback.prototype.ajax = function(){
	var appendId = $('.render')
	$.get({
		url: './review.add.json',
		dataType: 'json',
		success: function (data) {
			var items = [];
			for(var key in data){
				items.push(data[key].value);
			}
			return items;

			appendId.append(items);
		},
		context: this
	});
}