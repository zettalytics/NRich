'use strict';

/**
 * @ngdoc function
 * @name nrichApp.controller:VisualizationCtrl
 * @description
 * # VisualizationCtrl
 * Controller of the nrichApp
 */
angular.module('nrichApp')
    .controller('VisualizationCtrl', function ($scope, $location) {
        $scope.isActive = function(tab) {
            var qry_type = $location.search().type;
            if ((qry_type == undefined) || (qry_type == "")){
                qry_type = "match";
            }
            if (qry_type == tab)
                return "active";
            else
                return "";
        };
        $scope.options = {
            chart: {
                type: 'multiBarChart',
                height: 250,
                width: 900,
                margin: {
                    top: 200,
                    right: 20,
                    bottom: 20,
                    left: 90
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: false,
                showValues: true,
                transitionDuration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Record Counts',
                    tickFormat: function(d){
                        return d3.format(',d')(d);
                    }
                }
            }
        };

        $scope.data = [
            {
                "key": "Your File",
                "color": "#3c97ac",
                "values": [
                    {
                        "label" : "Email" ,
                        "value" : 1200345
                    } ,
                    {
                        "label" : "First" ,
                        "value" : 94756
                    } ,
                    {
                        "label" : "Last" ,
                        "value" : 93342
                    } ,
                    {
                        "label" : "State" ,
                        "value" : 53120
                    }
                ]
            },
            {
                "key": "NRich",
                "color": "#89a24c",
                "values": [
                    {
                        "label" : "Email" ,
                        "value" : 399753
                    } ,
                    {
                        "label" : "First" ,
                        "value" : 350000
                    } ,
                    {
                        "label" : "Last" ,
                        "value" : 345734
                    } ,
                    {
                        "label" : "State" ,
                        "value" : 219546
                    }
                ]
            }

        ];
        var file1 = new Object();
        file1.name = "AncientRuins.csv";
        file1.size = "1.2MB, 245,653 Records";
        file1.modified = "Updated on 6/10/2014 12:34";
        file1.cleansed = "Cleansed on 6/13/2014 9:21";
        file1.records = "399,753 records";
        file1.percent = "33%";
        var file2 = new Object();
        file2.name = "JakesWillow.csv";
        file2.size = "256KB, 53,034 Records";
        file2.modified = "Updated on 8/20/2014 9:14";
        file2.cleansed = "";
        file2.percent = "28%";
        file2.records = "71,693 records";

        var files = new Array();
        files.push(file1);
        files.push(file2);
        $scope.files = files;

        $scope.toggle = function() {
            $scope.hideVisual = !$scope.hideVisual;
        };
        $scope.hideVisual = true;
});
