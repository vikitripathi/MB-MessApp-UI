'use strict';

angular
    .module('messUiApp')   //no dependency as already defined
    .controller('state2Ctrl',['$scope','Restangular',function($scope,Restangular) {	//add dependency , items is  a resource
      	$scope.things = ['A', 'Set', 'fOf', 'Things'];
      	$scope.title  = 'State 2 List';
      	$scope.selectedValue='Set';
      	var restResource = Restangular.one('item',1);

            restResource.get().then(
            function(response){   //returned response handling
               console.log(response.data); 
               $scope.items=response.data;                   
            });
            //$scope.items=items;
      	//console.log(items);
      	// localStorage.itemDetails = JSON.stringify(response);
      	$scope.save=function(){
      		//alert(JSON.stringify($scope.items));
      		// var req={
      		// 	method:'POST',
      		// 	url:'http://127.0.0.1:8005/stock/item/',
      		// 	// headers:{

      		// 	// },
      		// 	data:$scope.items
      		// }
      		// //$http.put('http://127.0.0.1:8005/stock/item/1/',$scope.items);
      		// $http(req).success(function(){console.log("success");}).error(function(){console.log("error");});   
                  $scope.temp={item_id:$scope.items.item_id,item_name:$scope.items.item_name,item_unit:$scope.items.item_unit,quantity:$scope.items.quantity,balance:$scope.items.balance};
                  restResource.put($scope.temp);
                  console.log($scope.temp);   		
      	};
    }]);
