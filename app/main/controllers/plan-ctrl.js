'use strict';
angular.module('main')
.controller('PlanCtrl', function ($ionicModal, $scope, $ionicPopup, Root) {

    this.startTime = new Date();
    this.endTime = new Date();
    this.startDate = new Date();
    this.endDate = new Date();
    this.startLocation = '';
    this.endLocation = '';
    this.activities = [];
    this.shouldShowDelete = false;

    this.availableActivities = [{name: 'Cinema'}, {name: 'Theatre'}, {name: 'Museum'}];

    $ionicModal.fromTemplateUrl('main/templates/activityModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    this.createActivity = function (activity, index) {
        this.activities.push({ name: activity.name});
        this.availableActivities.splice(index, 1);
        Root.addActivity(activity.name);
        $scope.modal.hide();
    };

    this.openModal = function () {
        if (this.availableActivities.length === 0) {
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
        this.availableActivities.push(this.activities.splice(this.activities.indexOf(activity), 1)[0]);
        Root.deleteActivity(activity.name);
        if (this.activities.length === 0) {
            this.shouldShowDelete = false;
        }
    };

    this.changeDeleteVisible = function () {
        this.shouldShowDelete = !this.shouldShowDelete;
    };

});
