'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
    .controller('AccountCtrl', function ($scope, $location) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "profile";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        }

        $scope.email = "demo@emailpredict.com";
        $scope.first_name = "demo";
        $scope.last_name = "present";
        $scope.company = "Email Predict";
        $scope.address1 = "62 Pearl Street, Floor 2";
        $scope.address2 = "";
        $scope.city = "New York";
        $scope.state = "NY";
        $scope.zip = "10004";
        $scope.payment_type = "credit";
        $scope.countries = [
            {name:'Canada'},
            {name:'China P.R.'},
            {name:'France'},
            {name: "India"},
            {name: "Italy"},
            {name:'Japan'},
            {name:'United States'}
        ];
        $scope.my_country = $scope.countries[6];
        $scope.months = [
            {name:'01'},
            {name:'02'},
            {name:'03'},
            {name:'04'},
            {name:'05'},
            {name:'06'},
            {name:'07'},
            {name:'08'},
            {name:'09'},
            {name:'10'},
            {name:'11'},
            {name:'12'}
        ];
        $scope.cur_month = $scope.months[2];
        $scope.years = [
            {name:'2008'},
            {name:'2009'},
            {name:'2010'},
            {name:'2011'},
            {name:'2012'},
            {name:'2013'},
            {name:'2014'},
            {name:'2015'},
            {name:'2016'},
            {name:'2017'},
            {name:'2018'},
            {name:'2019'},
            {name:'2020'}
        ];
        $scope.cur_year = $scope.years[4];

        $scope.collection = ["visa", "master", "mastro", "amex", "discover","dinner"];
        $scope.selectedIndex = 0;
        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
        };

        $scope.purchase_history = [
            {
                "checked": true,
                "date": "15-Dec-14",
                "type": "Data Append",
                "size": "2,034,870",
                "amount": "$30,000",
                "status": "Invoiced",
                "method": ""
            },
            {
                "checked": true,
                "date": "18-Nov-14",
                "type": "Email Deployment",
                "size": "145,334",
                "amount": "$21,5500",
                "status": "Paid",
                "method": "Visa"
            },
            {
                "checked": false,
                "date": "22-Oct-14",
                "type": "Email List Acquisition",
                "size": "567,993",
                "amount": "$25,000",
                "status": "Paid",
                "method": "Mastercard"
            }
        ]
    });
