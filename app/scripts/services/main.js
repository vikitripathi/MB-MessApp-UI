'use strict';

//replace with restangular

angular
	.module('messUiApp')
	.factory('main',['$q','$http','$state', function($q,$http,$state){	//injecting
		var service={};		
		var isUserAuthenticated=false;
		var credentials={};
		credentials.username='';
		credentials.password='';

		service.setIsUserAuthenticated=function(val){	//val= true|false
			isUserAuthenticated=val;
		}

		service.getIsUserAuthenticated=function(){
			if(localStorage.token){
				isUserAuthenticated=true;
			}		
			return isUserAuthenticated;
		}

		service.getCredentials=function(){
			if (localStorage.userDetails) {
				var details=localStorage.userDetails;
				var res=details.split("-");
				credentials.username=res[0];
				credentials.password=res[1];
			}
			return credentials;
		}

		service.setCredentials=function(username,password){
			credentials.username=username;
			credentials.password=password;
		}

		service.resetAuthCredentials=function(){
			delete localStorage.token;
		    delete localStorage.userDetails;
		    delete localStorage.user;
		    $http.defaults.headers.common['Authorization'] = '';	//use restangular
		    service.setIsUserAuthenticated(false);
		}		

		// service.updateLoginStatus=function(){
		// 	if(localStorage.token)
		//       service.setIsUserAuthenticatedt(true);
		//     else
		//       service.setIsUserAuthenticatedt(false);
		// }		

		// service.logout=function(){
		// 	service.resetAuthCredentials();
		// 	//$state.transitionTo('login');
		// 	//console.log("Logged out...");
		// }

		return service;
	}]);