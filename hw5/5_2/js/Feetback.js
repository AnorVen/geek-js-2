function Feetback(selector) {
	this.selector = selector;
	Container.call(this, '.render');
	this.lastId = 1;
	this.feetbackItems = [];
	this.ajax();
}

Feetback.prototype = Object.create(Container.prototype);
Feetback.prototype.constructor = Feetback;

Feetback.prototype.render = function(selector){
	var reviewDiv = $('<div />', {
		id: this.id,
		text: 'Комментарии'
	});
	var list = $('<li />',{
		id: 'comments:ist'
	});
	reviewDiv.append(list);

	var result = $('<li />',{
		id: 'item'
	});
	list.append(result);
	reviewDiv.appendTo(this.selector);

}


Feetback.prototype.ajax = function(){
	$.get({
		url: './review.add.json',
		dataType: 'json',
		success: function (data) {
			for (var index in data.comments) {
				this.feetbackItems.push(data.comments[index]);
			}
			this.lastId = data.lastId;
			this.render(this.selector);
			this.refresh();
		},
		context: this
	});
}

Feetback.prototype.refresh = function() {
	var item = $('#item');
	item.empty();
		for (var i = 0; i < this.feetbackItems.length; i++) {
		commentLine = '<div><span>' + this.feetbackItems[i]['id_comment'] + ': ' + this.feetbackItems[i]['text'] +
			' | ' + '</span><span id="commentDel-' + i + '"> X </span>';
		if (this.feetbackItems[i]['status'] === 0) {
			commentLine += '<span id="commentSub-' + i + '"> M </span>';
		}
		commentLine += '</div>';

			item.append(commentLine);
	}
}