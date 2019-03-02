(function () {
'use strict';

angular.module('Loader').component('iconLoader', {
	templateUrl: 'templates/loader.template.html',
	controller: LoaderController
});

LoaderController.$inject = ['$rootScope']
function LoaderController($rootScope) {
	var $controller = this;
	var cancellers = [];

	$controller.$onInit = function () {

		var cancel = $rootScope.$on('$stateChangeStart',
		function(event, toState, toParams, fromState, fromParams, options) {
			$controller.showLoader = true;
		});
		cancellers.push(cancel);

		cancel = $rootScope.$on('$stateChangeSuccess',
		function(event, toState, toParams, fromState, fromParams) {
			$controller.showLoader = false;
		});
		cancellers.push(cancel);

		cancel = $rootScope.$on('$stateChangeError',
		function(event, toState, toParams, fromState, fromParams, error) {
			$controller.showLoader = false;
		});
		cancellers.push(cancel);
	};

	$controller.$onDestroy = function () {
		cancellers.forEach(function (cancel) {
			cancel();
		});
	};

};

})()
