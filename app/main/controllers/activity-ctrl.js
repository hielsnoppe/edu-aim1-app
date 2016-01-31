'use strict';
angular.module('main')
  .controller('ActivityCtrl', function ($ionicModal, $scope, $ionicPopup, $log, $stateParams) {
    this.name = $stateParams.name;

    this.filters = [];
    this.availableFilters = [];
    if (this.name === 'Cinema') {
      this.availableFilters = [{
        name: 'Movie'
      }];
    }

    $ionicModal.fromTemplateUrl('main/templates/filterModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.filterModal = modal;
    });

    this.openFilterModal = function () {
      if (this.availableFilters.length === 0) {
        $ionicPopup.alert({
          title: 'No more filters to add',
          content: 'You already used all the filters.'
        });
      } else {
        $scope.filterModal.show();
      }
    };

    this.createFilter = function (filter, index) {
      this.filters.push({
        name: filter.name
      });
      this.availableFilters.splice(index, 1);
      $scope.filterModal.hide();
    };

    this.closeModal = function () {
      $scope.filterModal.hide();
    };
  });
