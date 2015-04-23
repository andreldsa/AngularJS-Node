'use strict';

angular.module('finalnodeApp')
  .controller('PostShowCtrl', function ($scope, $http, $routeParams, $location, Auth) {
    $scope.post = {};
    $http.get('/api/posts/' + $routeParams.id).success(function(post) {
        $scope.post = post;
        $http.get('/api/realtys/' + post.realty).success(function(realty) {
            $scope.post.realty = realty;
        });
    });
    $scope.delete = function(post) {
      $http.delete('/api/posts/' + post._id);
      $location.path('/post')
    };
    $scope.isAdmin = function() {
    	return Auth.isAdmin()
    }
  });