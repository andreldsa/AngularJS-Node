'use strict';

angular.module('finalnodeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/post', {
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });
