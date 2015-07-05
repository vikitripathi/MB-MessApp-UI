'use strict';

/**
 * @ngdoc function
 * @name messUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messUiApp
 */
angular.module('messUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
