'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:CleanCtrl
 * @description
 * # CleanCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
  .controller('CleanCtrl', function ($scope, $location) {
        /*
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "profile";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        }*/
        var file1 = new Object();
        file1.name = "AncientRuins.csv";
        file1.status = "Cleansed, Appended";
        file1.size = "1.2MB, 245,653 Records";
        file1.modified = "Updated on 6/10/2014 12:34";
        file1.cleansed = "Cleansed on 6/12/2014 11:35";
        file1.email_cleansed = true;
        file1.name_cleansed = true;
        file1.de_dup = true;
        file1.other_cleansed = true;
        file1.complete_cleansed = true;
        var file2 = new Object();
        file2.name = "JakesWilliow.csv";
        file2.status = "Cleansed";
        file2.size = "256KB, 53,034 Records";
        file2.modified = "Updated on 8/20/2014 9:14";
        file2.cleansed = "";
        file2.email_cleansed = true;
        file2.name_cleansed = true;
        file2.de_dup = true;
        file2.other_cleansed = false;
        file2.complete_cleansed = null;
        var file3 = new Object();
        file3.name = "GlobalWomen25.csv";
        file3.status = "Appended";
        file3.size = "23.5MB, 7,328,022 Records";
        file3.modified = "Updated on 12/28/2014 11:05";
        file3.cleansed = "";/*
        file3.email_cleansed = true;
        file3.name_cleansed = true;
        file3.de_dup = true;
        file3.other_cleansed = true;
        file3.complete_cleansed = true;*/

        $scope.files = new Array();
        $scope.files.push(file1);
        $scope.files.push(file2);
        $scope.files.push(file3);
  });
