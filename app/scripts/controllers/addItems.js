'use strict';

angular
   .module('messUiApp')   //no dependency as already defined
    .controller('addItemsCtrl',['$scope','$http','items',function($scope,$http,items) {  //add dependency , eg factory(items) to be added
         $scope.things = ['A', 'Set', 'fOf', 'Things'];
         $scope.title  = 'State 2 List';
         $scope.selectedValue='Set';
         $scope.items=items;
         console.log(items);
         // localStorage.itemDetails = JSON.stringify(response);
         $scope.save=function(){
            //alert(JSON.stringify($scope.items));
                          
         };
    }]);