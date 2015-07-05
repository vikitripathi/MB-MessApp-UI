/*
 * Author: @bhishekdutt (abhishekdutt.iitr@gmail.com)
*/
'use strict';

/**
 * @ngdoc overview
 * @name messUiApp
 * @description
 * # messUiApp
 *
 * Main module of the application.
 */
angular
  .module('messUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){ //dependency Injection & annotating
      //the annotating is helpful when in minimised version of javascript! as param converts to a , b  so to prevent that <- check 
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/state1');
      // Now set up the states
      // and routing
      $stateProvider
        // .state('index',{
        //   url:',
        //   views:{
        //     'viewA':{
        //         template:'index.viewA'  
        //     },
        //     'viewB':{
        //         template:'index.viewB'   //hard coded text  or use temlate  url  to load a partial view !
        //     }
        //   }
        // })
        .state('state1',{
          url:'/state1',
          templateUrl: 'views/state1.html'
        })
        .state('state1.list',{
          //url will be state1/list as nested as state1.list (change to 'list' here and ui-sref and check !)
          url: '/list',
          templateUrl: 'views/state1.list.html',
          controller: ['$scope',function($scope) {    //The controller will not be instantiated if template is not defined. 
            $scope.items = ['A', 'List', 'Of', 'Items'];
          }]
        })
        .state('state2', {
          url: '/state2',
          templateUrl: 'views/state2.html'
        })
        .state('state2.list', {
          url: '/list',
          templateUrl: 'views/state2.list.html',
          controller:'state2Ctrl',
          resolve:{ //load before controller and template proceeds
            items:['Items',function(Items){   //using Items services
              return Items.get();
            }]
          } 
        });
    }]);
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
