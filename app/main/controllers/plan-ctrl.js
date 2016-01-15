'use strict';
angular.module('main')
.controller('PlanCtrl', function ($log) {

  this.startTime = new Date();
  this.endTime = new Date();
  this.startDate = new Date();
  this.endDate = new Date();
  this.startLocation = '';
  this.endLocation = '';
  this.activities = [];
  var activityNum = 0;
  this.shouldShowDelete = false;

  this.addActivity = function () {
    var activity = {};
    activity.name = 'Activity' + activityNum;
    activityNum++;
    this.activities.push(activity);
  };

  this.removeActivity = function (activity) {
    this.activities.splice(this.activities.indexOf(activity), 1);
    if (this.activities.length === 0) {
      this.shouldShowDelete = false;
    }
  };

  this.changeDeleteVisible = function () {
    this.shouldShowDelete = !this.shouldShowDelete;
  };

});
