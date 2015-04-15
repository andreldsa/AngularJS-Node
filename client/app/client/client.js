'use strict';

angular.module('finalnodeApp')
  .config(function($routeProvider) {
	$routeProvider.when('/client', {
		templateUrl : 'app/client/client.html',
		controller : 'ClientCtrl',
		authenticate: true
	}).when('/client/new', {
		templateUrl : 'app/client/client.create.html',
		controller : 'ClientCtrl',
		authenticate: true
	}).when('/client/:id', {
		templateUrl : 'app/client/client.show.html',
		controller : 'ClientShowCtrl',
		authenticate: true
	});
});
