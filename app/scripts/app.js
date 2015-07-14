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
    'ui.grid',
    'ui.grid.exporter',
    'ui.grid.pagination',
    'ui.grid.edit',
     'ui.grid.rowEdit',
     'ui.grid.cellNav',
    'ngCookies'
  ]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){ //dependency Injection & annotating
      //the annotating is helpful when in minimised version of javascript! as param converts to a , b  so to prevent that <- check 
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/login');
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
        .state('login',{
          url:'/login',
          templateUrl:'views/login.html',
          controller:'loginCtrl'
        })
        .state('addItems',{
          url:'/add_items',
          templateUrl: 'views/addItems.html',
          controller:'addItemsCtrl'           
        })
        .state('aboutUs',{
          url:'/about_us',
          templateUrl:'views/about.html',
          controller:'aboutCtrl'
        })
        .state('transactionDetails',{
          url:'/transactions',
          templateUrl:'views/transaction.html',
          controller:'transactionCtrl'
        })
        .state('editItems',{
          url:'/edit_items',
          templateUrl:'views/editItems.html',
          controller:'editItemsCtrl'
        });        
    }]);

// app.constant('settings', {
//   API_BASE_URL: 'http://localhost:8005/stock/',
// });

app.config(['$httpProvider', function($httpProvider){
  //cookieprovider

  //$httpProvider.defaults.useXDomain = true;
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  
  // RestangularProvider.setBaseUrl(settings.API_BASE_URL);
  // RestangularProvider.setDefaultHttpFields({cache: false});
  // RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
  // // RestangularProvider.setDefaultHeaders({'Authorization': ''});
  // //RestangularProvider.setDefaultHeaders({'X-CSRFToken': $cookies['csrftoken'] });
  // RestangularProvider.setFullResponse(true);
  // RestangularProvider.setDefaultRequestParams({format: 'json'});

}]);

