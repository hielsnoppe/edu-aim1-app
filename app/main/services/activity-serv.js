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
      lodash.remove(array, activity)
    }

    function availableActivities() {
      return lodash.differenceBy(Root.dataSource, selectedActivities, 'name');
    }

    // ======
    // Public
    // ======
    this.getAvailableActivities = function () {
      return availableActivities();
    };

    this.getOriginalActivity = function (activity) {

    };

    this.getSelectedActivities = function () {
      return selectedActivities
    };

    this.getActivity = function (activity) {
      return findActivityByName(selectedActivities, activity);
    };

    this.updateActivity = function (activity, data) {
      var index = lodash.findIndex(selectedActivities, ['name', activity]);
      this.activities[index] = data;
    };

    this.addActivity = function (activity) {
      selectedActivities.push(findActivityByName(availableActivities(), activity));
      removeActivityFromArray(availableActivities, activity);
      return selectedActivities;
    };

    this.deleteActivity = function (activity) {
      removeActivityFromArray(selectedActivities, activity);
      return selectedActivities;
    };
  });
