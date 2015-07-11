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
var app=angular.module('messUiApp', [    //dependency
    'ngAnimate',
    'ngResource',
    'ui.router', // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    // 'restangular',
    'ngCookies'
  ]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){ //dependency Injection & annotating
      //the annotating is helpful when in minimised version of javascript! as param converts to a , b  so to prevent that <- check 
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/aboutUs');
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
        .state('addItems',{
          url:'/add_items',
          templateUrl: 'views/addItems.html',
          controller:'addItemsCtrl'           
        })
        .state('aboutUs',{
          url:'/about_us',
          templateUrl:'views/about.html',
          controller:'aboutCtrl'
        });
        // .state('state1.list',{
        //   //url will be state1/list as nested as state1.list (change to 'list' here and ui-sref and check !)
        //   url: '/list',
        //   templateUrl: 'views/state1.list.html',
        //   controller: ['$scope',function($scope) {    //The controller will not be instantiated if template is not defined. 
        //     $scope.items = ['A', 'List', 'Of', 'Items'];
        //   }]
        // })
        // .state('state2', {
        //   url: '/state2',
        //   templateUrl: 'views/state2.html'
        // })
        // .state('state2.list', {
        //   url: '/list',
        //   templateUrl: 'views/state2.list.html',
        //   controller:'state2Ctrl',
        //   // resolve:{ //load before controller and template proceeds
        //   //   items:['Items',function(Items){   //using Items services
        //   //     return Items.get();
        //   //   }]
        //   // } 
        // });
    }]);

// app.constant('settings', {
//   API_BASE_URL: 'http://localhost:8005/stock/',
// });

// app.config(['$httpProvider' ,'RestangularProvider', 'settings', function($httpProvider,RestangularProvider, settings){
//   //cookieprovider

//   //$httpProvider.defaults.useXDomain = true;
//   //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
//   $httpProvider.defaults.xsrfCookieName = 'csrftoken';
//   $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  
//   RestangularProvider.setBaseUrl(settings.API_BASE_URL);
//   RestangularProvider.setDefaultHttpFields({cache: false});
//   RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
//   // RestangularProvider.setDefaultHeaders({'Authorization': ''});
//   //RestangularProvider.setDefaultHeaders({'X-CSRFToken': $cookies['csrftoken'] });
//   RestangularProvider.setFullResponse(true);
//   RestangularProvider.setDefaultRequestParams({format: 'json'});

// }]);

