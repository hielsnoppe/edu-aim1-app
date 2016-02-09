'use strict';
angular.module('main')
  .service('Activity', function ($log, Root, lodash) {
    // =======
    // Private
    // =======
    function selectedActivities () {
      return Root.filledInfo.activities;
    }

    function findActivityByName (array, name) {
      return lodash.filter(array, {'name': name})[0];
    }

    function removeActivityFromArray (array, activity) {
      lodash.remove(array, function (test) {
        return test.name === activity.name;
      });
      updateActivity(array);
    }

    function availableActivities () {
      return lodash.differenceBy(Root.dataSource, selectedActivities(), 'name');
    }

    function updateActivity (data) {
      Root.filledInfo.activities = data;
    }

    // ======
    // Public
    // ======
    this.getAvailableActivities = function () {
      return availableActivities();
    };

    this.getOriginalActivity = function (activity) {
      return findActivityByName(Root.dataSource, activity);
    };

    this.getSelectedActivities = function () {
      return selectedActivities();
    };

    this.getActivity = function (activity) {
      return findActivityByName(selectedActivities(), activity);
    };

    this.updateActivity = function (activity, data) {
      var index = lodash.findIndex(selectedActivities(), ['name', activity]);
      selectedActivities()[index] = data;
      updateActivity();
    };

    this.addActivity = function (activity) {
      var newActivity = {};
      // Use object assign to avoid editing the reference object!
      Object.assign(newActivity, findActivityByName(availableActivities(), activity));
      newActivity.properties = [];
      selectedActivities().push(newActivity);
      return selectedActivities();
    };

    this.deleteActivity = function (activity) {
      removeActivityFromArray(selectedActivities(), activity);
      return selectedActivities();
    };
  });
