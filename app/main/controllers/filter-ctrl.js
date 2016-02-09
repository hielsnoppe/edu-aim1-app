'use strict';
angular.module('main')
.controller('FilterCtrl', function ($stateParams, $scope, $state, Component) {
  if (!$stateParams.activity) {
    // Return if we arrived here without a given activity
    $state.go('plan');
  }
  else {
    $scope.wholeActivity = $stateParams.activity;
    $scope.activity = $scope.wholeActivity.name;
  }
});
