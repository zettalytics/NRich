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
                type: 'discreteBarChart',
                height: 450,
                width: 840,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Record Count',
                    axisLabelDistance: 30
                }
            }
        };

        $scope.data = [{
            key: "Cumulative Return",
            values: [
                { "label" : "A" , "value" : -29.765957771107 },
                { "label" : "B" , "value" : 0 },
                { "label" : "C" , "value" : 32.807804682612 },
                { "label" : "D" , "value" : 196.45946739256 },
                { "label" : "E" , "value" : 0.19434030906893 },
                { "label" : "F" , "value" : -98.079782601442 },
                { "label" : "G" , "value" : -13.925743130903 },
                { "label" : "H" , "value" : -5.1387322875705 }
            ]
        }];

});
