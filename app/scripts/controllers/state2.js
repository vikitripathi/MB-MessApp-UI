'use strict';

angular
	.module('messUiApp')   //no dependency as already defined
    .controller('state2Ctrl',['$scope','$http','items',function($scope,$http,items) {	//add dependency
      	$scope.things = ['A', 'Set', 'fOf', 'Things'];
      	$scope.title  = 'State 2 List';
      	$scope.selectedValue='Set';
      	$scope.items=items;
      	console.log(items);
      	// localStorage.itemDetails = JSON.stringify(response);
      	$scope.save=function(){
      		//alert(JSON.stringify($scope.items));
      		var req={
      			method:'PUT',
      			url:'http://127.0.0.1:8005/stock/item/1/',
      			// headers:{

      			// },
      			data:$scope.items
      		}
      		//$http.put('http://127.0.0.1:8005/stock/item/1/',$scope.items);
      		$http(req).success(function(){console.log("success");}).error(function(){console.log("error");});      		
      	};
    }]);
