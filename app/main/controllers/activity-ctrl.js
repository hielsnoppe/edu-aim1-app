'use strict';
angular.module('main')
  .controller('ActivityCtrl', function ($ionicModal, $scope, $ionicPopup, $log, $stateParams, Root) {
    this.shouldShowDelete = false;
    this.name = $stateParams.name;
    this.activity = Root.getActivity(this.name);

    this.addFilter = function (filter) {
        console.log('On ajoute ' + filter);
        for (var i = 0; i < this.activity.filtersAvailable.length; i++) {
            if (this.activity.filtersAvailable[i].name === filter) {
                this.activity.filtersSelected.push(this.activity.filtersAvailable[i]);
             this.activity.filtersAvailable.splice(i, 1);
            }
        }
        $scope.filterModal.hide();
        Root.updateActivity(this.name, this.activity);
    };

    this.deleteFilter = function (filter) {
        for (var i = 0; i < this.activity.filtersSelected.length; i++) {
            if (this.activity.filtersSelected[i].name === filter) {
                this.activity.filtersAvailable.push(this.activity.filtersSelected[i]);
                this.activity.filtersSelected.splice(i, 1);
            }
        }
        if (this.activity.filtersSelected.length === 0) {
            this.shouldShowDelete = false;
        }
        Root.updateActivity(this.name, this.activity);
    };

    $ionicModal.fromTemplateUrl('main/templates/filterModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.filterModal = modal;
    });

    this.openFilterModal = function () {
      if (this.activity.filtersAvailable.length === 0) {
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
