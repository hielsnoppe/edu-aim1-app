'use strict';
angular.module('main')
.controller('FilterCtrl', function ($stateParams, $scope, $state, Filter, Root, $log) {
  if (!$stateParams.activity || ! $stateParams.filter) {
    // Return if we arrived here without a given activity
    $state.go('plan', {clearHistory: true});
  }
  else {
    $scope.activity = $stateParams.activity;
    $scope.filter = Filter.getFilter($scope.activity.name, $stateParams.filter.name);
    $scope.originalFilter = Filter.getOriginalFilter($scope.activity.name, $scope.filter.name);
  }

  this.updateFilter = function (filterData) {
    $log.log(Root.filledInfo);
    $scope.filter.value = filterData;
    Filter.updateFilter($scope.activity.name, $scope.filter.name, $scope.filter);
  };
});
