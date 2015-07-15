'use strict';

//replace with restangular

angular
	.module('messUiApp')
	.factory('main',['$q','$http','$state','jwtHelper' ,function($q,$http,$state,jwtHelper){	//injecting
		var service={};		
		var isUserAuthenticated=false;
		var credentials={};
		credentials.username='';
		credentials.password='';

		service.setIsUserAuthenticated=function(val){	//val= true|false
			isUserAuthenticated=val;
		}

		// var verifyToken=function(data){
		// 	var baseUrl="http://127.0.0.1:8005/api-token-verify/";
		// 	var tokenData={
		// 		token:data
		// 	}
		// 	console.log("service main verify token");
		// 	console.log(token);
		// 	var req={
	 //           method:'POST',
	 //           url:baseUrl,
	 //           headers:{
	 //           	    'Content-Type': 'application/json'
	 //           },
	 //           data:tokenData
	 //        };

	 //      	$http(req)
  //               .success(function(success){
  //                   //the local storage token is valid
  //                   console.log(success.token);
  //                   isUserAuthenticated=true;
  //                   $http.defaults.headers.common['Authorization'] = 'JWT ' + success.token;
                    
  //               })
  //               .error(function(error){
  //                   //the local storage token is invalid , so logout
  //                   console.log(error.non_field_errors[0]);
  //                   delete localStorage.token;
		// 		    delete localStorage.userDetails;
		// 		    delete localStorage.user;
		// 		    $http.defaults.headers.common['Authorization'] = '';	//use restangular
		// 		    isUserAuthenticated=false;                    
  //               });

		// }

		service.getIsUserAuthenticated=function(){
			if(localStorage.token){
		        //verifyToken(localStorage.token);
				//if localstorage has token and is valid
				//verifyToken(localstorage.token);
				var token=localStorage.token.split(" ")[1];
				var bool = jwtHelper.isTokenExpired(token);
				if(bool){//token is expired
					isUserAuthenticated=false;
				}else{
					isUserAuthenticated=true;
				}				
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
		    isUserAuthenticated=false;								//service.setIsUserAuthenticated(false);
		}		

		return service;
	}]);