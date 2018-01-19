function BasketItems(className, id, items) {
	Basket.call(this);

	this.className = className || null;
	this.id = id || null;
	this.items = items || this.itemsAjax;
}

BasketItems.prototype = Object.create(Basket.prototype);
BasketItems.prototype.constructor = BasketItems;

BasketItems.prototype.render = function () {
	var result = $('<div />', {
		id: 'BasketItems'
	});
	for (var i = 0; i < this.items.length; i++) {
		var li = $('<li />');
		result.append(li.append(this.items[i].render()));
	}
	console.log(result);
	$('#basket_items').append(result);

};


function BasketItem(id_product, quantity, price) {
	Container.call(this, 'basket');

	this.id_product = id_product;
	this.price = price;
	this.quantity = quantity;
}

BasketItem.prototype = Object.create(Basket.prototype);
BasketItem.prototype.constructor = BasketItem;

BasketItem.prototype.render = function () {

	var basketItem = $('<div />', {
		className: 'basketItem'
	});
	var basketItemPhoto = $('<img />', {
		className: ' basketItemPhoto',
		src: '#',
		alt: 'id_product'
	});
	var basketItemName = $('<p />', {
		className: ' basketItemName',
		text: 'Товар id:' + this.id_product
	});
	var basketItemQuantity = $('<p />', {
		className: ' basketItemQuantity',
		text: this.quantity
	});
	var basketItemPrice = $('<p />', {
		className: ' basketItemPrice',
		text: +this.quantity * +this.price
	});

	basketItem.append(basketItemPhoto)
		.append(basketItemName)
		.append(basketItemName)
		.append(basketItemQuantity)
		.append(basketItemPrice);
	console.log(basketItem);
	$()

};

