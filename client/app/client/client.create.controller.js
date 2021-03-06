'use strict';

angular.module('finalnodeApp')
  .controller('ClientCreateCtrl', function ($scope, $http, $location, Auth) {
    $scope.client = {}
    $scope.errors = {};
    $scope.add = function(form) {
    	$scope.submitted = true;
      if($scope.client === '') {
        return;
      }
      $http.post('/api/clients', $scope.client).then( function() {
    	  $location.path('/client')
      }).catch(function(err) {
    	  err = err.data;
    	  $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
      });
    };
  });
