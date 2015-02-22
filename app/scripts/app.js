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
    'ngTouch'
  ])
    .run(function($rootScope, $location) {
        $rootScope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
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
      .otherwise({
        redirectTo: '/help'
      });
  });
