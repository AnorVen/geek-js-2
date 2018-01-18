function BasketItem(id_product,  quantity, price) {
	Container.call(this, 'basket');

	this.id_product = id_product;
	this.price = price;
	this.quantity = quantity;
}

BasketItem.prototype = Object.create(Basket.prototype);
BasketItem.prototype.constructor = BasketItem;

BasketItem.prototype.render = function(){

	var basketItem =  $('<div />', {
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

};

BasketItem.prototype.collectBasketItems = function () {
	var appendId = '#' + this.id + '_items';
	$.get({
		url: './basket.json',
		dataType: 'json',
		success: function (data) {
			var items = [];
			for(var i = 0; i < data.basket.length; i++ ){
				items.push(new BasketItem(data.basket[i].id_product, data.basket[i].price, data.basket[i].quantity))

			}




			// Получаем и выводим начальные данные корзины
			var basketData = $('<div />', {
				id: 'basketTotal'
				// text: 'Text'
			}); //

			var quantity = function () {
				var q = 0;
				for (var i = 0; i < data.basket.length; i++) {
					q += data.basket[i].quantity;
				}
				return q;
			};
			this.countGoods = quantity();
			this.amount = data.amount;

			basketData.append('<p>Всего товаров: ' + this.countGoods + '</p>');
			basketData.append('<p>Сумма: ' + this.amount + '</p>');

			basketData.appendTo(appendId);

			for (var index in data.basket) {
				this.basketItems.push(data.basket[index]);
			}
			$('#basket_items').append(basketItem);
		},
		context: this
	});
};