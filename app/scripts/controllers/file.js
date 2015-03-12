'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the nrichApp
 */
var app = angular.module('nrichApp');
app.controller('FileCtrl', function ($scope, $location, $upload) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "upload";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        };

        $scope.$watch('files', function(){
            $scope.upload($scope.files);
        });

        $scope.upload = function(files) {
            if (files && files.length){
                for(var i = 0; i < files.length; i++){
                    var file = files[i];
                    $upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        fields: {
                            'username': $scope.username
                        },
                        file: file
                    }).progress(function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' +
                            evt.config.file.name);
                    }).success(function (data, status, headers, config) {
                        console.log('file ' + config.file.name + 'uploaded. Response: ' +
                            JSON.stringify(data));
                    });
                }
            }
        }
        var file1 = new Object();
        file1.name = "Women25Food.csv";
        file1.status = "Cleansed, Appended";
        file1.size = "1.2MB, 245,653 Records";
        file1.modified = "Updated on 6/10/2014 12:34";
        file1.exported = "Exported on 6/12/2014 11:35";
        file1.progress = 100;
        var file2 = new Object();
        file2.name = "MenCarBuffs.csv";
        file2.status = "Cleansed";
        file2.size = "256KB, 53,034 Records";
        file2.modified = "Updated on 8/20/2014 9:14";
        file2.exported = "Exported on 8/23/2014 16:42";
        file2.progress = 100;

        var file3 = new Object();
        file3.name = "HistoryFanatics.csv";
        file3.status = "Appended";
        file3.size = "23.5MB, 7,328,022 Records";
        file3.modified = "Updated on 12/28/2014 11:05";
        file3.exported = "Exported on 1/3/2015 8:05";
        file3.progress = 56;
        var files = new Array();
        files.push(file1);
        files.push(file2);
        files.push(file3)
        $scope.exportFiles = files;
  });


