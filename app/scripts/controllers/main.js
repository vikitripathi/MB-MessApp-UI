'use strict';

/**
 * @ngdoc function
 * @name messUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the messUiApp
 */
angular.module('messUiApp')
  .controller('mainCtrl',['$scope','$http','$state','main',function($scope,$http,$state,main) {  //add dependency , eg factory(items) to be added
         	//$scope= {};
      		$scope.isUserAuthenticated = main.getIsUserAuthenticated();

      		$scope.credentials=main.getCredentials();
      		console.log($scope.credentials);
      		$scope.username=$scope.credentials.username;
      		$scope.password=$scope.credentials.password;

      		$scope.logout=function(){
      			main.resetAuthCredentials();
      			$state.transitionTo('login');
      		}
      // 		$scope.global.resetAuthCredentials = function() {
		    //     delete localStorage.token;
		    //     delete localStorage.userDetails;
		    //     delete localStorage.user;
		    //     $http.defaults.headers.common['Authorization'] = '';	//use restangular
		    //     $scope.global.updateLoginStatus();
		    // }

      // 		$scope.global.updateLoginStatus = function() {
		    //     if(localStorage.token)
		    //       $scope.global.isUserAuthenticated = true;
		    //     else
		    //       $scope.global.isUserAuthenticated = false;
		    // }

		    // $scope.global.logout = function() {
		    //     $scope.global.resetAuthCredentials();
		    //     $state.transitionTo('login');
		    //     console.log("Logged out...");
		    // }

    }]);
