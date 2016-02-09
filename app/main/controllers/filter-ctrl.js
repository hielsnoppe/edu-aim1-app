'use strict';
angular.module('main')
.controller('FilterCtrl', function ($stateParams, $scope, $state) {
  if (!$stateParams.activity || ! $stateParams.filter) {
    // Return if we arrived here without a given activity
    $state.go('plan', {clearHistory: true});
  }
  else {
    $scope.wholeActivity = $stateParams.activity;
    $scope.activity = $scope.wholeActivity.name;
    $scope.wholeFilter = $stateParams.filter;
    $scope.filter = $scope.wholeFilter.name;
  }
});
