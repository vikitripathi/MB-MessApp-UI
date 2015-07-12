'use strict';

//replace with restangular

angular
	.module('messUiApp')
	.factory('time',['$q','$http','$interval', function($q,$http,$interval){	//injecting
		var service={};
		var getDatetime;

		service.getTime=function(){
			return getDatetime;
		}
		
		service.currentTime=function(){
            $interval( function() {
             getDatetime = new Date();
              //console.log($scope.getDatetime);
            }, 1);
         }
        //service.currentTime();

		return service;
	}]);