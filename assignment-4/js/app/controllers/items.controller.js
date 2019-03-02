(function () {
'use strict';

angular.module('MenuApp').controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemsList'];
function ItemsController(itemList) {
	var ctrl = this;

	ctrl.items = itemList.menu_items;
	ctrl.categoriesName = itemList.category.name;
}

})()
