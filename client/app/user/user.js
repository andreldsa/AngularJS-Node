'use strict';

angular.module('finalnodeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/:id', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        resolve: {
        	permission: function($location, Auth) {
                if(!Auth.isAdmin()){
                    $location.path('/404/');                    
                }
             }
        }
        	
      });
  });
