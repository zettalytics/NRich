'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:DeployCtrl
 * @description
 * # DeployCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('DeployCtrl', function ($scope, $location) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "campaign";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        };
        $scope.selectedIndex = 0;
        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
        };
  });
