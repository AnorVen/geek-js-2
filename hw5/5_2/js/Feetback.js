function Feetback(selector) {
	this.selector = selector;
	Container.call(this, '.render');
	this.lastId = 1;
	this.feetbackItems = [];
	this.ajax();
}

Feetback.prototype = Object.create(Container.prototype);
Feetback.prototype.constructor = Feetback;

Feetback.prototype.render = function (selector) {
	var reviewDiv = $('<div />', {
		id: this.id,
		text: 'Комментарии'
	});
	var list = $('<ul />', {
		id: 'commentsList'
	});
	reviewDiv.append(list);

	reviewDiv.appendTo(this.selector);

};


Feetback.prototype.ajax = function () {
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
};

Feetback.prototype.refresh = function () {
	var list = $('#commentsList');
	list.empty();
	for (var i = 0; i < this.feetbackItems.length; i++) {
		commentLine = '<li><span>' + this.feetbackItems[i]['id_comment'] + ': '
			+ this.feetbackItems[i]['text']
			+ ' | Name: ' + this.feetbackItems[i]['id_user']
			+ ' | ' + '</span><span id="commentDel-' + i + '"> X </span>';
		if (this.feetbackItems[i]['status'] === 0) {
			commentLine += '<span id="commentSub-' + i + '"> + </span>';
		}
		commentLine += '</li>';

		list.append(commentLine);
	}
};

Feetback.prototype.add = function (obj) {
	//
	// вот тут я чего-то уже плыву и не могу понять почему не проходит name
//

	var newComment = {
		"id_comment": ++this.lastId,
		"text": obj.coment,
		"name": obj.name,
		"status": 0
	};


	this.feetbackItems.push(newComment);

	this.refresh();
}

Feetback.prototype.delete = function(comment) {
	this.feetbackItems.splice(comment, 1);
	this.refresh();
}