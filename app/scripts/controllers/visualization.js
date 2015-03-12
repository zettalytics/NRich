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
        $scope.hideVisual = false;

        var fields = new Array();
        var firstObj = new Object();
        firstObj.name = "First";
        firstObj.records = d3.format(',d')(950000);
        fields.push(firstObj);
        var lastObj = new Object();
        lastObj.name = "Last";
        lastObj.records = d3.format(',d')(945734);
        fields.push(lastObj);
        var houseHoldObj = new Object();
        houseHoldObj.name = "Household_income";
        houseHoldObj.records = d3.format(',d')(853647);
        fields.push(houseHoldObj);
        var numChildObj = new Object();
        numChildObj.name = "Number of Children";
        numChildObj.records = d3.format(',d')(763643);
        fields.push(numChildObj);
        var stateObj = new Object();
        stateObj.name = "State";
        stateObj.records = d3.format(',d')(719546);
        fields.push(stateObj);
        var zipObj = new Object();
        zipObj.name = "Zip";
        zipObj.records = d3.format(',d')(600345);
        fields.push(zipObj);
        var ethnicObj = new Object();
        ethnicObj.name = "Ethnic";
        ethnicObj.records = d3.format(',d')(598069);
        fields.push(ethnicObj);
        var genderObj = new Object();
        genderObj.name = "Gender";
        genderObj.records = d3.format(',d')(593456);
        fields.push(genderObj);
        var occupationObj = new Object();
        occupationObj.name = "Occupation";
        occupationObj.records = d3.format(',d')(552183);
        fields.push(occupationObj);
        var dobObj = new Object();
        dobObj.name = "DOB";
        dobObj.records = d3.format(',d')(182345);
        fields.push(dobObj);
        var addressObj = new Object();
        addressObj.name = "Address";
        addressObj.records = d3.format(',d')(170234);
        fields.push(addressObj);
        $scope.data_fields = fields;
        //$scope.data_file = new Object();

        $scope.bar_options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 170,
                width: 350,
                margin: {
                    top: 200,
                    right: 20,
                    bottom: 20,
                    left: 20
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: false,
                showValues: false,
                transitionDuration: 500,
                valueFormat: function(d){
                    return d3.format(',d')(d);
                },
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function(d){
                        return d3.format(',d')(d);
                    }
                }
            },
            title: {
                enable: true,
                text: 'Number of Children'
            }
        };
        $scope.bar_data = [
            {
                "key": "Number of children",
                "values": [
                    {
                        "label" : "A" ,
                        "value" : 14343
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 45567
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 22983
                    }
                ]
            }
        ];

        $scope.line_options = {
            chart: {
                type: 'lineChart',
                height: 160,
                width: 350,
                margin: {
                    top: 200,
                    right: 20,
                    bottom: 20,
                    left: 50
                },
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                showControls: false,
                showValues: true,
                transitionDuration: 500,
                useInteractiveGuideline: true,

                xAxis: {
                    axisLabel: "Label d",
                    tickFormat: function(d){
                        var dx = $scope.line_data[0].values[d].x;

                        //return d3.format('Label ,d')(dx);
                        return "Label "+ dx;
                    }
                },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function(d){

                        return d3.format(',d')(d);
                    },
                    axisLabelDistance: 30
                }
            },
            title: {
                enable: true,
                text: 'Ethnicity'
            }
        };
        $scope.line_data = [
            {
                key: "Ethnicity",
                values : [
                    {
                        x: 0,
                        y: 12345
                    },
                    {
                        x: 1,
                        y: 22874
                    },
                    {
                        x: 2,
                        y: 98654
                    },
                    {
                        x: 3,
                        y: 278937
                    },
                    {
                        x: 4,
                        y: 68950
                    },
                    {
                        x: 5,
                        y: 128654
                    }
                ]
            }
        ];
        $scope.bar_options2 = {
            chart: {
                type: 'multiBarChart',
                height: 170,
                width: 350,
                margin: {
                    top: 200,
                    right: 20,
                    bottom: 20,
                    left: 40
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: false,
                showValues: false,
                transitionDuration: 500,
                valueFormat: function(d){
                    return d3.format(',d')(d);
                },
                xAxis: {
                    showMaxMin: false,
                    axisLabelDistance: 30

            },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function(d){
                        return d3.format(',d')(d);
                    }
                }
            },
            title: {
                enable: true,
                text: 'Occupation'
            }
        };
        $scope.bar_data2 = [
            {
                "key": "Occupation",
                "color": "#89a24c",
                "values": [
                    {
                        "label" : "A" ,
                        "value" : 22359
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 80500
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 41523
                    },
                    {
                        "label" : "D" ,
                        "value" : 82900
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 94456
                    } ,
                    {
                        "label" : "F" ,
                        "value" : 9124
                    },
                    {
                        "label" : "G" ,
                        "value" : 31053
                    } ,
                    {
                        "label" : "H" ,
                        "value" : 5693
                    } ,
                    {
                        "label" : "I" ,
                        "value" : 27947
                    },
                    {
                        "label" : "J" ,
                        "value" : 56683
                    }

                ]
            }
        ];

        $scope.save_files = [
            {
                "name": "WomenFashions-CL.csv",
                "date": "6-Jan-15",
                "saved": [
                    {
                        "visualization": "Occupation",
                        "appended": true
                    },
                    {
                        "visualization": "Credit Card",
                        "appended": false
                    },
                    {
                        "visualization": "Household income",
                        "appended": false
                    },
                    {
                        "visualization": "Home Purchase",
                        "appended": false
                    }
                ]
            },
            {
                "name": "HistoryFanatics-CL.csv",
                "date": "23-Jun-14",
                "saved": [
                    {
                        "visualization": "Mobile Phone Type",
                        "appended": true
                    },
                    {
                        "visualization": "Number of Children",
                        "appended": true
                    },
                    {
                        "visualization": "Books",
                        "appended": false
                    },
                    {
                        "visualization": "Pets",
                        "appended": false
                    },
                    {
                        "visualization": "Home Owner",
                        "appended": false
                    },
                    {
                        "visualization": "Home Renter",
                        "appended": false
                    },
                    {
                        "visualization": "Investing",
                        "appended": false
                    },
                    {
                        "visualization": "Motorcycles",
                        "appended": false
                    }
                ]
            },
            {
                "name": "AncientRuins-CL.csv",
                "date": "2-Jun-14",
                "saved": [
                    {
                        "visualization": "Number of Children",
                        "appended": true
                    },
                    {
                        "visualization": "Ethnicity",
                        "appended": true
                    },
                    {
                        "visualization": "Occupation",
                        "appended": true
                    }
                ]
            },
            {
                "name": "CarBuffs-CL.csv",
                "date": "14-May-14",
                "saved": [
                    {
                        "visualization": "Occupation",
                        "appended": true
                    },
                    {
                        "visualization": "Credit Card",
                        "appended": false
                    },
                    {
                        "visualization": "Household Income",
                        "appended": false
                    }
                ]
            }
        ]
});
