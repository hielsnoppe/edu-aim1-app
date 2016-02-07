'use strict';
angular.module('main')
  .service('Activity', function ($log, Root, lodash) {
    // =======
    // Private
    // =======
    var selectedActivities = [];

    function findActivityByName (array, name) {
      return lodash.filter(array, {'name': name})[0];
    }

    function removeActivityFromArray (array, activity) {
      lodash.remove(array, activity);
    }

    function availableActivities() {
      return lodash.differenceBy(Root.dataSource, selectedActivities, 'name');
    }

    function updateRoot() {
      Root.filledInfo.activities = selectedActivities;
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
      return selectedActivities;
    };

    this.getActivity = function (activity) {
      return findActivityByName(selectedActivities, activity);
    };

    this.updateActivity = function (activity, data) {
      var index = lodash.findIndex(selectedActivities, ['name', activity]);
      this.activities[index] = data;
      updateRoot()
    };

    this.addActivity = function (activity) {
      selectedActivities.push(findActivityByName(availableActivities(), activity));
      removeActivityFromArray(availableActivities, activity);
      updateRoot()
      return selectedActivities;
    };

    this.deleteActivity = function (activity) {
      removeActivityFromArray(selectedActivities, activity);
      updateRoot()
      return selectedActivities;
    };
  });
