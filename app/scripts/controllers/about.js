'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
