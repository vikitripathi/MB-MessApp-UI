'use strict';

/**
 * @ngdoc function
 * @name messUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the messUiApp
 */
angular.module('messUiApp')
  .controller('loginCtrl',['$scope','$http','$state','main','$interval',function($scope,$http,$state,main,$interval) {  //add dependency , eg factory(items) to be added
        $scope.temps = {};
        $scope.temps.username = 'dutt';
        $scope.temps.password = 'dutt';
        $scope.temps.title = 'Login';
        $scope.getDatetime='';
        
        if(main.getIsUserAuthenticated()){
            $state.transitionTo('aboutUs');
        }          

        $scope.currentTime=function(){
            $interval( function() {
              $scope.getDatetime = new Date();
              //console.log($scope.getDatetime);
            }, 1);
        }

        $scope.temps.tryLogin = function() {
          $scope.temps.login($scope.temps.username, $scope.temps.password);
        }

        $scope.temps.login = function(username, password) {
        var baseUrl="http://127.0.0.1:8005/api-token-auth/";
        var user = {
          username: username,
          password: password
        };
        console.log(user);

        var req={
           method:'POST',
           url:baseUrl,
            // headers:{
            // },
           data:user
        };

        $http(req)
                .success(function(success){
                    //deferred.resolve(data);
                    console.log(success.token);
                    $scope.currentTime();
                    localStorage.token = 'JWT ' + success.token;
                    localStorage.user='Time'+$scope.getDatetime;        //check not working
                    localStorage.userDetails=username+'-'+password;
                    main.setIsUserAuthenticated(true);
                    //$scope.global.updateLoginStatus();

                    //if(main.getIsUserAuthenticated()){
                    console.log("Authorization token recieved...");
                    main.setCredentials(username,password);           //use service to set credentials to be used in other controller
                    $http.defaults.headers.common['Authorization'] = localStorage.token;
                    //Restangular.setDefaultHeaders({'Authorization': localStorage.token});
                    $state.transitionTo('aboutUs');
                    //}
                })
                .error(function(error){
                    //deferred.reject('There was an error while adding the item');
                    console.log(error.non_field_errors[0]);
                    $scope.temps.error = error.non_field_errors[0];
                    main.resetAuthCredentials();
                });

        //var restResource = Restangular.all('auth-token/');

        // restResource.post(user).then(
        //   function(success) {
        //     console.log(success.data.token);
        //     localStorage.token = 'JWT ' + success.data.token;
        //     $scope.global.updateLoginStatus();
            
        //     if($scope.global.isUserAuthenticated){
        //       console.log("Authorization token recieved...");
        //       Restangular.setDefaultHeaders({'Authorization': localStorage.token});
        //       $state.transitionTo('userDetails');
        //     }
        //   }, function(error) {
        //     console.log(error.data.non_field_errors[0]);
        //     $scope.temps.error = error.data.non_field_errors[0];
        //     $scope.global.resetAuthCredentials();
        //   }
        // );
      }

    }]);
