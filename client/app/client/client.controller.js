'use strict';

angular.module('finalnodeApp')
  .controller('ClientCtrl', function ($scope, $http, $location, Auth) {
    $scope.clients = [];
    $http.get('/api/clients').success(function(clients) {
      $scope.clients = clients;
    });
    
    $scope.noClients = function() {
    	return $scope.clients.length === 0
    }
    
    $scope.add = function() {
      if($scope.newClient === '') {
        return;
      }
      $scope.newClient['owner'] = {}
      $scope.newClient.owner['id'] = Auth.getCurrentUser()._id
      $http.post('/api/clients', $scope.newClient);
      $location.path('/client')
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
