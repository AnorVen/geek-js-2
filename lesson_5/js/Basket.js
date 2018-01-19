function Basket() {
	Container.call(this, 'basket');

	this.countGoods = 0;
	this.amount = 0;

	this.basketItems = [];
	this.collectBasketItems(); // Загружаем товары, которые уже добавлены (json файл)
}

Basket.prototype = Object.create(Container.prototype);
Basket.prototype.constructor = Basket;

//
// TODO посмотреть метод render!
//

Basket.prototype.render = function (root) { // Генерация базовой разметки
	var basketDiv = $('<div />', {
		id: this.id,
		text: 'Корзина'
	});

	var basketItemsDiv = $('<div />', {
		id: this.id + '_items'
	});

	basketItemsDiv.appendTo(basketDiv);
	basketDiv.appendTo(root);
};

Basket.prototype.add = function (product, quantity, price) {
	// console.log(product, quantity, price);
	var basketItems = {
		"id_product": product,
		"price": price
	};

	// for (var i = 1; i <= quantity; i++) {
	//     this.countGoods++;
	// }


	// Немного модифицировал вышенаписанное
	this.countGoods += +quantity;
	this.amount += +price * +quantity;

	this.basketItems.push(basketItems);
	this.refresh();
};

Basket.prototype.refresh = function () {
	var $basketDataDiv = $('#basket_data'); // тут была ошибка, вместо basket_data был basket_wrapper
	$basketDataDiv.empty();
	$basketDataDiv.append('<p>Всего товаров: ' + this.countGoods + '</p>');
	$basketDataDiv.append('<p>Сумма: ' + this.amount + '</p>');
};

Basket.prototype.ajaxData = function () {
	var appendId = '#' + this.id + '_items';

	$.get({
		url: './basket.json',
		dataType: 'json',
		success: function (data) {

			// Получаем и выводим начальные данные корзины
			var quantity = function () {
				var q = 0;
				for (var i = 0; i < data.basket.length; i++) {
					q += data.basket[i].quantity;
				}
				return q;
			};
			this.countGoods = quantity();
			this.amount = data.amount;


		},
		context: this
	});
};


Basket.prototype.collectBasketItems = function () {
	var appendId = '#' + this.id + '_items';

	this.ajaxData();
	var basketData = $('<div />', {
		id: 'basket_data'
		// text: 'Text'
	}); //


	basketData.append('<p>Всего товаров: ' + this.countGoods + '</p>');
	basketData.append('<p>Сумма: ' + this.amount + '</p>');

	basketData.appendTo(appendId);


};