'use strict';

angular.module('finalnodeApp')
  .controller('ClientCreateCtrl', function ($scope, $http, $location, Auth) {
    $scope.clients = [];
    $scope.client = {}
    $scope.errors = {};
    $http.get('/api/clients').success(function(clients) {
      $scope.clients = clients;
    });
    
    $scope.noClients = function() {
    	return $scope.clients.length === 0
    }
    
    $scope.add = function(form) {
    	$scope.submitted = true;
      if($scope.client === '') {
        return;
      }
      $scope.client['owner'] = {}
      $scope.client.owner['id'] = Auth.getCurrentUser()._id
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

    $scope.delete = function(client) {
      $http.delete('/api/clients/' + client._id);
      $scope.clients = []
      $http.get('/api/clients').success(function(clients) {
          $scope.clients = clients;
        });
    };
    
    $scope.show = function(client) {
           $location.path('/client/'+client._id)
      };
     
      $scope.edit = function(client) {
          $location.path('/client/edit/'+client._id)
     };
  });
