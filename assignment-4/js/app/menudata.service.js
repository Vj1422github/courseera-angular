(function () {
'use strict';

angular.module('data')
	.service('MenuDataService', MenuDataService)
	.constant('API_PATH_CATEGORIES', 'https://davids-restaurant.herokuapp.com/categories.json')
	.constant('API_PATH_MENU_ITEMS', 'https://davids-restaurant.herokuapp.com/menu_items.json');

MenuDataService.$inject = ['$http', 'API_PATH_CATEGORIES', 'API_PATH_MENU_ITEMS'];
function MenuDataService($http, apiPathCategories, apiPathMenuItems) {
	var service = this;

	service.getAllCategories = function () {
		return $http({
			url: apiPathCategories
		}).then(function (response) {
			return response.data;
		});
	}

	service.getItemsForCategories = function (categoriesShortName) {
		return $http({
			url: apiPathMenuItems,
			params: {
				category: categoriesShortName
			}
		}).then(function (response) {
			return response.data;
		});
	}
}

})()
