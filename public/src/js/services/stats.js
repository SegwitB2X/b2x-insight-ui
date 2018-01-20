'use strict';

angular.module('insight.statsService')
    .factory('AddressesInfo',
        function($resource, Api) {
            return $resource(Api.apiPrefix + '/statistics/addresses/info', {
                q: '@q'
            });
        });
