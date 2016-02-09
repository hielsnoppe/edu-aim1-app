'use strict';
angular.module('main')
  .controller('PlanCtrl', function ($ionicHistory, $ionicModal, $scope, $ionicPopup, Root,
                                    Activity, $state, $stateParams, $rootScope) {
    // Huge fix for routing problems!!!
    // https://github.com/driftyco/ionic/issues/4124
    $rootScope.$on('$locationChangeSuccess', function () {
      if (! $ionicHistory.currentView()) { return; }

      //extracted from $ionicHistory
      function getCurrentStateId () {
        var id;
        if ($state && $state.current && $state.current.name) {
          id = $state.current.name;
          if ($state.params) {
            for (var key in $state.params) {
              if ($state.params.hasOwnProperty(key) && $state.params[key]) {
                id += '_' + key + '=' + $state.params[key];
              }
            }
          }
          return id;
        }
        // if something goes wrong make sure its got a unique stateId
        return ionic.Utils.nextUid();
      }

      var currentView = $ionicHistory.currentView();
      currentView.stateId = getCurrentStateId();
      currentView.stateName = $state.current.name;
      currentView.stateParams = angular.copy($state.params);
    });

    if ($stateParams.clearHistory) {
      $ionicHistory.clearHistory();
    }
    this.generalData = {
      startTime: new Date(),
      endTime: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      startLocation: '',
      endLocation: ''
    };

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
      $scope.availableActivities = Activity.getAvailableActivities();
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
      this.activities = Activity.deleteActivity(activity);
      $scope.availableActivities = Activity.getAvailableActivities();
      if (this.activities.length === 0) {
        this.shouldShowDelete = false;
      }
    };

    this.changeDeleteVisible = function () {
      this.shouldShowDelete = !this.shouldShowDelete;
    };

    this.uploadData = function () {
      Root.setGeneralData(this.generalData);
      Root.uploadInfo();
      $state.go('result', {response: Root.filledInfo})
    };

  });
