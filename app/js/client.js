'use strict';

require('angular/angular');
require('angular-route');
var _ = require('lodash');
require('angular-google-maps');

var app = angular.module('app', ['ngRoute', 'uiGmapgoogle-maps']).config(
  ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProvider) {
    GoogleMapApiProvider.configure({
      key: 'AIzaSyDxSdiQyXv_5vMlallP82HESya8hUdKPSA'
    });
  }]
);

//directives
//services
//controllers
require('./controllers/mapCtrl.js')(app);

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
