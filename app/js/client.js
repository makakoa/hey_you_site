'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']);

//directives
//services
//controllers

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/map', {
    templateUrl: 'templates/map/map_view.html',
    controller: 'mapCtrl'
  })
  .otherwise({
    redirectTo: '/map'
  });
}]);
