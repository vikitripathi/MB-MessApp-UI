'use strict';

/**
 * @ngdoc function
 * @name messUiApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the messUiApp
 */
angular.module('messUiApp')
  .controller('dashboardCtrl',['$scope','$http','$interval','time','$state',function($scope,$http,$interval,time,$state) {  //add dependency , eg factory(items) to be added
             
         $scope.currentTime=function(){
            $interval( function() {
              $scope.getDatetime = new Date();
              //console.log($scope.getDatetime);
            }, 1);
         }
         $scope.currentTime();

         //chart 1
          $scope.labelsBar = ["January", "February", "March", "April", "May", "June", "July"];
          $scope.series = ['Series A', 'Series B'];
          $scope.dataBar = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
          ];
          $scope.onClick = function (points, evt) {
            console.log(points, evt);
          };

          //pie chart
            $scope.labelsDoughnut = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            $scope.dataDoughnut = [300, 500, 100];

          //chart 2
          $scope.labelsLine = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
          $scope.seriesLine = ['Series A', 'Series B'];

          $scope.dataLine = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
          ];
    }]);
