'use strict';

angular.module('finalnodeApp')
  .controller('ClientUpdateCtrl', function ($scope, $http, $routeParams, $location, Auth) {
	$scope.client = {};
	
	$http.get('/api/clients/' + $routeParams.id).success(function(client) {
	    $scope.client = client;
	});
	$scope.delete = function(client) {
	  $http.delete('/api/clients/' + client._id);
	  $location.path('/client')
	};
	$scope.isAdmin = function() {
		return Auth.isAdmin()
	}
	
    $scope.save = function(form) {
    	if(form.$valid) {
            $http.put('/api/clients/' + $scope.client._id, $scope.client);
            $location.path('/client/' + $scope.client._id);
    	}
    };
  });