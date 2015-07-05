'use strict';

angular
	.module('messUiApp')
	.factory('Items',['$http', function($http){
		return{
			get: function(){
				return $http.get('http://127.0.0.1:8005/stock/item/1/').then(function(response){
                return response.data;
              });
			}
		};
	}]);