'use strict';

/**
 * @ngdoc function
 * @name messUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the messUiApp
 */
angular.module('messUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
