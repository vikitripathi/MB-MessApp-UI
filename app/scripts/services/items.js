'use strict';

//replace with restangular

angular
	.module('messUiApp')
	.factory('items',['$q','$http', function($q,$http){	//injecting
		var service={};
		var baseUrl="http://127.0.0.1:8005/stock/item/";
		var _itemId="";

		service.setItem=function(item_id){	//item_id
			_itemId=item_id;
		}

		service.getItems=function(){		
			return $http.get(baseUrl).then(function(response){
                return response.data;		//console response
            });
		}

		service.getUnits=function(){
			//return an api call consisiting of all the units
		}
		//@todo: testing
		service.addItem=function(item){
			//use resolve and reject to control the flow of your data
			//create a  deferrer
			var deferred = $q.defer();
			var req={
               method:'POST',
               url:baseUrl,
               // headers:{

               // },
               data:item
            };
            //$http.put('http://127.0.0.1:8005/stock/item/1/',$scope.items);
            $http(req)
		            .success(function(data){
		            	deferred.resolve(data);
		            })
		            .error(function(data){
		            	deferred.reject('There was an error while adding the item');
		            }); 
            return deferred.promise;
		}
			
		service.editItem=function(item){
			var finalUrl=baseUrl+_itemId+"/";		//check for cors error!
			var deferred = $q.defer();
			var req={
               method:'PUT',
               url:finalUrl,
               data:item
            }            
            $http(req)
		            .success(function(data){
		            	deferred.resolve(data);
		            })
		            .error(function(data){
		            	deferred.reject('There was an error while editing the item');
		            }); 
            return deferred.promise; 
		}

		return service;
	}]);