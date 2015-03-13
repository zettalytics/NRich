'use strict';

/**
 * @ngdoc overview
 * @name nrichApp
 * @description
 * # nrichApp
 *
 * Main module of the application.
 */
angular
  .module('nrichApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularFileUpload',
    'nvd3',
     'mgcrea.ngStrap'
  ])
    .run(function($rootScope, $location, $cookieStore, $http) {
        $rootScope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        };

        $rootScope.showToolBar = $location.path().indexOf("login") < 0;
        /*
        $rootScope.showModal = false;
        $rootScope.toggleModal = function(){
            $rootScope.showModal = !$rootScope.showModal;
        };*/
        $rootScope.modal = {
            "title": "Confirm Payment Information",
            "placement": "center",

            "content": ""
        };

        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
                $rootScope.showToolBar = false;
            }
        });

        $rootScope.logout = function () {
            $location.path('/login');
            $rootScope.showToolBar = false;
        }
    })
  .config(function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/file', {
        templateUrl: 'views/file.html',
        controller: 'FileCtrl'
      })
      .when('/clean', {
        templateUrl: 'views/clean.html',
        controller: 'CleanCtrl'
      })
      .when('/visualization', {
        templateUrl: 'views/visualization.html',
        controller: 'VisualizationCtrl'
      })
      .when('/append', {
        templateUrl: 'views/append.html',
        controller: 'AppendCtrl'
      })
      .when('/deploy', {
        templateUrl: 'views/deploy.html',
        controller: 'DeployCtrl'
      })
      .when('/acquisition', {
        templateUrl: 'views/acquisition.html',
        controller: 'AcquisitionCtrl'
      })
      .when('/three', {
        templateUrl: 'views/three.html',
        controller: 'ThreeCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/account'
      });
  });
