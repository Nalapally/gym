'use strict';

angular.module('gymApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


