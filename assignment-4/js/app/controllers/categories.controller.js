/**
 * Created by Vladimir on 07.10.2016.
 */

(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categoriesList'];
    function CategoriesController(categoriesList) {
        this.categoriesList = categoriesList;
    }
})()
