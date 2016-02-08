'use strict';
angular.module('main')
  .controller('PlanCtrl', function ($ionicViewService, $ionicModal, $scope, $ionicPopup, Root, Activity, $state) {
    $ionicViewService.clearHistory();
    this.startTime = new Date();
    this.endTime = new Date();
    this.startDate = new Date();
    this.endDate = new Date();
    this.startLocation = '';
    this.endLocation = '';
    this.activities = Activity.getSelectedActivities();
    $scope.availableActivities = Activity.getAvailableActivities();
    this.shouldShowDelete = false;

    $ionicModal.fromTemplateUrl('main/templates/activityModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.availableActivities = Activity.getAvailableActivities();
      $scope.modal = modal;
    });

    this.createActivity = function (activity) {
      this.activities = Activity.addActivity(activity.name);
      $scope.modal.hide();
      $state.go('activity', { activity: activity });
    };

    this.openModal = function () {
      if ($scope.availableActivities.length === 0) {
        $ionicPopup.alert({
          title: 'No more activities to add',
          content: 'You already used all the possible activities!!!'
        });
      }
      else {
        $scope.modal.show();
      }
    };

    this.closeModal = function () {
      this.modal.hide();
    };

    this.removeActivity = function (activity) {
      this.activities = Activity.deleteActivity(activity.name);
      if (this.activities.length === 0) {
        this.shouldShowDelete = false;
      }
    };

    this.changeDeleteVisible = function () {
      this.shouldShowDelete = !this.shouldShowDelete;
    };

  });
