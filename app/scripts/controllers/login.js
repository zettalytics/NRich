'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, AuthenticationService) {
            // reset login status
            AuthenticationService.ClearCredentials();

            $scope.login = function () {
                $scope.dataLoading = true;
                AuthenticationService.Login($scope.username, $scope.password, function(response) {
                    if(response.success) {
                        AuthenticationService.SetCredentials($scope.username, $scope.password);
                        $rootScope.showToolBar = true;
                        $location.path('/');
                    } else {
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }
                });
            };
  });
