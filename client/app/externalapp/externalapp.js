'use strict';

angular.module('finalnodeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/externalapp', {
        templateUrl: 'app/externalapp/externalapp.html',
        controller: 'ExternalappCtrl'
      });
  });
