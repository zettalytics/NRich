'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:ThreeCtrl
 * @description
 * # ThreeCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('ThreeCtrl', function ($scope,$location) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "cookie";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        };

        $scope.cookie_files = [
            {
                "checked" : true,
                "name": "YoungProfessionals.csv",
                "size": "564KB, 45,653 Records",
                "uploaded": "Uploaded on 6/10/2014 11:35"
            },
            {
                "checked" : false,
                "name": "CinemaGoers.csv",
                "size": "856KB, 153,034 Records",
                "uploaded": "Uploaded on 8/19/2014 9:24"
            },
            {
                "checked" : false,
                "name": "HistoryFanatics.csv",
                "size": "23.5MB, 7,328,022 Records",
                "uploaded": "Uploaded on 12/24/2014 11:04"
            }
        ];
        $scope.mobile_files = [
            {
                "checked" : false,
                "name": "YoungProfessionals.csv",
                "size": "564KB, 45,653 Records",
                "uploaded": "Uploaded on 6/10/2014 11:35"
            },
            {
                "checked" : false,
                "name": "CinemaGoers.csv",
                "size": "856KB, 153,034 Records",
                "uploaded": "Uploaded on 8/19/2014 9:24"
            },
            {
                "checked" : true,
                "name": "HistoryFanatics.csv",
                "size": "23.5MB, 7,328,022 Records",
                "uploaded": "Uploaded on 12/24/2014 11:04"
            }
        ];


    });
