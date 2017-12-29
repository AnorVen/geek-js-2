/*use strict*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */

class Hamburger{
	constructor(_size, _stuffing){
		this.size = _size;
		this.stuffing = _stuffing;
	}

	addStuffing(stuff){
		this.stuffing += stuff;
	}

	getSize(){
		return this.size
	}

	static _size(){
	  return {small || big };
	}
}
/*
класс гамбургер{
  свойства: размер и наполнение

  }
наполнение{
		калорийность и цена
}

размер{
  колорийность и цена
}


 */




Hamburger.SIZE_SMALL = new Hamburger(small, none);
Hamburger.SIZE_LARGE = new Hamburger(big, none);

/* Размеры, виды начинок и добавок


Hamburger.STUFFING_CHEESE = ...
Hamburger.STUFFING_SALAD = ...
Hamburger.STUFFING_POTATO = ...
Hamburger.TOPPING_MAYO = ...
Hamburger.TOPPING_SPICE = ...
 */
/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {}
	/**
	 * Убрать добавку, при условии, что она ранее была
	 * добавлена.
	 *
	 * @param topping   Тип добавки
	 * @throws {HamburgerException}  При неправильном использовании
	 */
	Hamburger.prototype.removeTopping = function (topping){}
	/**
	 * Получить список добавок.
	 *
	 * @return {Array} Массив добавленных добавок, содержит константы
	 *                 Hamburger.TOPPING_*
	 */
	Hamburger.prototype.getToppings = function () {}
	/**
	 * Узнать размер гамбургера
	 */
	Hamburger.prototype.getSize = function (){}
	/**
	 * Узнать начинку гамбургера
	 */
	Hamburger.prototype.getStuffing = function () {}
	/**
	 * Узнать цену гамбургера
	 * @return {Number} Цена в тугриках
	 */
	Hamburger.prototype.calculatePrice = function () {}
	/**
	 * Узнать калорийность
	 * @return {Number} Калорийность в калориях
	 */
	Hamburger.prototype.calculateCalories = function () {}
	/**
	 * Представляет информацию об ошибке в ходе работы с гамбургером.
	 * Подробности хранятся в свойстве message.
	 * @constructor
	 */
	function HamburgerException () {}
