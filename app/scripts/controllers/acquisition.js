'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:AcquisitionCtrl
 * @description
 * # AcquisitionCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('AcquisitionCtrl', function ($scope, $location) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "model";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        };

        $scope.file_list = [
            {
                "checked" : true,
                "name" : "YoungProfessionals.csv",
                "size" : "564KB, 45,653 Records",
                "uploaded": "Uploaded on 6/10/2014 11:35"
            },
            {
                "checked" : false,
                "name" : "CinemaGoers.csv",
                "size" : "856KB, 153,034 Records",
                "uploaded": "Uploaded on 8/20/2014 9:20"
            },
            {
                "checked" : false,
                "name" : "HistoryFanatics.csv",
                "size" : "23.5MB, 7,328,022 Records",
                "uploaded": "Uploaded on 12/29/2014 11:04"
            }
        ]

        $scope.saved_segments = [
            {
                "name": "Car Buffs",
                "Date": "4-Dec-14",
                "Count": "389,465"
            },
            {
                "name": "Foodies",
                "Date": "23-Nov-14",
                "Count": "99,357"
            },
            {
                "name": "Family with 2 or more kids",
                "Date": "6-Oct-14",
                "Count": "134,334"
            },
            {
                "name": "High Spenders",
                "Date": "8-Sep-14",
                "Count": "22,796"
            },
            {
                "name": "Pet Owners",
                "Date": "7-Jun-14",
                "Count": "231,234"
            },
            {
                "name": "Visa Holders",
                "Date": "23-May-14",
                "Count": "559,219"
            },
            {
                "name": "Travelers",
                "Date": "8-Sep-14",
                "Count": "66,901"
            },
            {
                "name": "Cat Owners",
                "Date": "7-Jul-14",
                "Count": "234,465"
            },
            {
                "name": "Boat Owners",
                "Date": "27-May-14",
                "Count": "559,603"
            }
        ]
  });
