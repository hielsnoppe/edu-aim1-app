'use strict';
angular.module('main')
.controller('ResultCtrl', function ($stateParams, $scope) {

  $scope.result = $stateParams.response;

});
