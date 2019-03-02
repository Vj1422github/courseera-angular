(function () {
'use strict';

angular.module('MenuApp').config(Routes);

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
function Routes($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
			url: '/',
			templateUrl: 'templates/home.template.html'
		}).state('categories', {
			url: '/categories',
			templateUrl: 'templates/categories.template.html',
			controller: 'CategoriesController',
			controllerAs: 'controller',
			resolve: {
				categoriesList: ['MenuDataService',
				function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		}).state('items', {
			url: '/items/{shortname}',
			templateUrl: 'templates/items.template.html',
			controller: 'ItemsController',
			controllerAs: 'controller',
			resolve: {
				itemsList: ['$stateParams', 'MenuDataService',
				function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategories($stateParams.shortname);
				}],
			}
		});
}

})();
