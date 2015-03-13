'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:AppendCtrl
 * @description
 * # AppendCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('AppendCtrl', function ($scope, $location) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "data";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        }

        var file = new Object();
        file.name = "AncientRuins.csv";
        file.size = "1.2MB, 245,653 Records";
        $scope.append_file = file;

        $scope.append_fields = [
            {
                "checked": false,
                "name" : "First",
                "count": "350,000"
            },
            {
                "checked": false,
                "name" : "Last",
                "count": "345,734"
            },
            {
                "checked": false,
                "name" : "State",
                "count": "219,546"
            },
            {
                "checked": true,
                "name" : "Zip",
                "count": "200,345"
            },
            {
                "checked": true,
                "name" : "Gender",
                "count": "193,456"
            },
            {
                "checked": true,
                "name" : "DOB",
                "count": "182,345"
            },
            {
                "checked": true,
                "name" : "Address",
                "count": "170,342"
            },
            {
                "checked": true,
                "name" : "City",
                "count": "170,234"
            },
            {
                "checked": false,
                "name" : "Zip4",
                "count": "168,765"
            }
        ];

        $scope.reverse_files = [
            {
                "name": "YoungProfessionals.csv",
                "size": "564KB, 45,653 Records",
                "uploaded_time": "Uploaded on 6/10/2014 11:35",
                "checked": true,
                "email_checked": true,
                "name_checked": false,
                "address_checked": false
            },
            {
                "name": "CinemaGoers.csv",
                "size": "856KB, 153,034 Records",
                "uploaded_time": "Uploaded on 8/20/2014 9:24",
                "checked": false,
                "email_checked": null,
                "name_checked": null,
                "address_checked": null
            },
            {
                "name": "HistoryFanatics.csv",
                "size": "23.5MB, 7,328,022 Records",
                "uploaded_time": "Uploaded on 12/29/2014 16:11",
                "checked": true,
                "email_checked": true,
                "name_checked": true,
                "address_checked": true
            }
        ];
  });
