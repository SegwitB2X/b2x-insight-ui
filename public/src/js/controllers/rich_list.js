'use strict';

angular.module('insight.richList').controller('RichListController',
    function($scope, $routeParams, $location, Global, RichList) {
        $scope.global = Global;

        $scope.list = [];
        $scope.init = function() {
            RichList.query({},
                function(list) {
                    $scope.list = list;
                },
                function(e) {
                    $scope.error = 'API ERROR: ' + e.data;
                });
        };

    });
