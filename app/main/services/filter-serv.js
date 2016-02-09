'use strict';
angular.module('main')
.service('Filter', function ($log, Activity, lodash) {

  // =======
  // Private
  // =======
  function selectedFilters (activity) {
    return Activity.getActivity(activity).properties;
  }

  function findFilterByName (object, name) {
    return lodash.filter(object, {'name': name})[0];
  }

  function removeFilterFromObject (activity, object, filter) {
    lodash.remove(object, function (test) {
      return test.name === filter.name;
    });
    updateActivity(activity, object);
  }

  function availableFilters (activity) {
    return lodash.differenceBy(Activity.getOriginalActivity(activity).properties, selectedFilters(activity), 'name');
  }

  function updateActivity (activity, data) {
    var obtainedActivity = Activity.getActivity(activity);
    obtainedActivity.properties = data;
  }

  // ======
  // Public
  // ======
  this.getAvailableFilters = function (activity) {
    return availableFilters(activity);
  };

  this.getOriginalFilter = function (activity, filter) {
    return findFilterByName(Activity.getOriginalActivity(activity), filter);
  };

  this.getSelectedFilters = function (activity) {
    return selectedFilters(activity);
  };

  this.getFilter = function (activity, filter) {
    return findFilterByName(selectedFilters(activity), filter);
  };

  this.updateFilter = function (activity, filter, data) {
    var index = lodash.findIndex(selectedFilters(activity), ['name', filter]);
    selectedFilters(activity)[index] = data;
    updateActivity(activity);
  };

  this.addFilter = function (activity, filter) {
    selectedFilters(activity).push(findFilterByName(availableFilters(activity), filter));
    return selectedFilters(activity);
  };

  this.deleteFilter = function (activity, filter) {
    removeFilterFromObject(activity, selectedFilters(activity), filter);
    return selectedFilters(activity);
  };

});
