'use strict';

module.exports = function(app) {
  app.controller('mapCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.index = function() {
      $http({
        method: 'GET',
        url: 'http://hey-you-api.herokuapp.com/v1/api/dots/all'
      })
      .success(function(data) {
        console.log('got data, still have to make map dots');
      })
      .error(function(data, status) {
        console.log('there was an error');
      });
    };

    $scope.index();
  }]);
};
