'use strict';
angular.module('main')
  .controller('ActivityCtrl', function ($ionicModal, $scope, $ionicPopup, $log, $stateParams, Filter, $state) {
    this.shouldShowDelete = false;
    if (!$stateParams.activity) {
      // Return if we arrived here without a given activity
      $state.go('plan');
    }
    else {
      $scope.wholeActivity = $stateParams.activity;
      $scope.activity = $scope.wholeActivity.name;
      this.filters = Filter.getSelectedFilters($scope.activity);
      $scope.availableFilters = Filter.getAvailableFilters($scope.activity);

      $ionicModal.fromTemplateUrl('main/templates/filterModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.availableFilters = Filter.getAvailableFilters($scope.activity);
        $scope.filterModal = modal;
      });
    }

    this.addFilter = function (filter) {
      Filter.addFilter($scope.activity, filter);
      $scope.filterModal.hide();
      $state.go('filter', {filter: filter});
    };

    this.deleteFilter = function (filter) {
      Filter.deleteFilter($scope.activity, filter);
      if (this.activity.length === 0) {
        this.shouldShowDelete = false;
      }
    };

    this.openFilterModal = function () {
      if ($scope.availableFilters.length === 0) {
        $ionicPopup.alert({
          title: 'No more filters to add',
          content: 'You already used all the filters.'
        });
      } else {
        $scope.filterModal.show();
      }
    };

    this.closeModal = function () {
      $scope.filterModal.hide();
    };

    this.changeDeleteVisible = function () {
      this.shouldShowDelete = !this.shouldShowDelete;
    };
  });
