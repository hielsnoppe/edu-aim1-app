'use strict';
angular.module('main')
.controller('ResultDetailCtrl', function ($log, $stateParams, Root, $http, Config, $scope) {

  $scope.activities = [];

  // Post the information from the server
  $http.post(Config.ENV.SERVER_URL, $stateParams.response)
    .then(function (result) {
      $scope.activities = result.response;
    });

});
