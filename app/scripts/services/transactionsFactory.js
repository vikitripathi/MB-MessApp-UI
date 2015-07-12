'use strict';

//replace with restangular

angular
	.module('messUiApp')
	.factory('transactionsFactory',['$q','$http', function($q,$http){	//injecting
		var service={};
		var baseUrl="http://127.0.0.1:8005/stock/transaction/";
		
		var temp='';
				
		service.getItemsName=function(item_id){	//convert to use items factory made function
			var itemUrl="http://127.0.0.1:8005/stock/item/";
			var itemFinalUrl=itemUrl+item_id;
			console.log(itemFinalUrl);		
			return $http.get(itemFinalUrl).then(function(response){
				// temp=response;
				// console.log(temp);
                return response.data.item_name;		//console response                
            });
		}

		//@todo: testing
		service.getTransactions=function(){
			return $http.get(baseUrl).then(function(response){
				temp=response.data;
                return temp;		//console response
            });
		}

		// service.data=function(){
		// 	var transaction=service.getTransactions();
		// 	var i=1;
		// 	console.log(transaction);
		// 	// angular.forEach(transaction,function(value,key){
		// 	// 	var item_name=service.getItemsName(value.item);
		// 	// 	console.log(item_name);
		// 	// 	data.push({
		// 	// 		"sr_no":i,
		// 	// 		"item_name":item_name,
		// 	// 		"transaction_type":value.transaction_type,
		// 	// 		"quantity":value.quantity,
		// 	// 		"cost":value.cost,
		// 	// 		"inventory":value.inventory,
		// 	// 		"date":value.date,
		// 	// 		"timestamp":value.timestamp
		// 	// 	});
		// 	// 	i++;
		// 	// });
		// 	// return data;
		// }

		return service;
	}]);