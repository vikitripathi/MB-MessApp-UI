'use strict';

/**
 * @ngdoc function
 * @name messUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the messUiApp
 */
angular.module('messUiApp')
  .controller('aboutCtrl',['$scope','$http','$interval','time','main','$state',function($scope,$http,$interval,time,main,$state) {  //add dependency , eg factory(items) to be added
         // $scope.things = ['A', 'Set', 'fOf', 'Things'];
         // $scope.title  = 'State 2 List';
         // $scope.selectedValue='Set';
         // $scope.items=items;
         // console.log(items);
         // // localStorage.itemDetails = JSON.stringify(response);
         // $scope.save=function(){
         //    //alert(JSON.stringify($scope.items));
                          
         // };
         // time.currentTime();
         
         // time.getTime().success(function(response){
         //    $scope.getDatetime =response;
         // });
         if(!main.getIsUserAuthenticated()){
            $state.transitionTo('login');
        } 

         $scope.currentTime=function(){
            $interval( function() {
              $scope.getDatetime = new Date();
              //console.log($scope.getDatetime);
            }, 1);
         }
         $scope.currentTime();
    }]);
