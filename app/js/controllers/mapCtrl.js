'use strict';

module.exports = function(app) {
  app.controller('mapCtrl', ['$scope', '$http', 'uiGmapIsReady', function($scope, $http, MapReady) {
    $scope.index = function(maps) {
      $http({
        method: 'GET',
        url: 'http://hey-you-api.herokuapp.com/v1/api/dots/all'
      })
      .success(function(data) {
        data.forEach(function(dot) {
          var position = new maps.LatLng(dot.latitude, dot.longitude);
          var marker = new maps.Marker({
            position: position,
            map: maps[0],
            title: dot.title,
            animation: maps.Animation.DROP,
            text: dot.post,
            user: dot.username,
            color: dot.color
          });
          maps.event.addListener(marker, 'click', function() {
            maps[0].panTo(marker.getPosition());
            $scope.dot.title = this.title;
            $scope.dot.text = this.text;
            $scope.dot.color = this.color;
          });
        });
      })
      .error(function(data, status) {
        console.log('there was an error');
      });
    };

    $scope.map = {};
    $scope.map.options = {
      mapTypeControl: false,
      navigationControl: false,
      streetViewControl: false,
      zoomControl: false,
      panControl: false
    };

    $scope.map.center = {
      latitude: 47.621,
      longitude:-122.332
    };
    $scope.map.zoom = 2;
    $scope.control = {};
    MapReady.promise().then(function(maps) {
      $scope.index(maps);
    });
  }]);
};
