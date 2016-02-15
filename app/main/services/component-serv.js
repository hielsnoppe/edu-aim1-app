'use strict';
angular.module('main')
.service('Component', function ($log, Filter, lodash) {

  // =======
  // Private
  // =======
  function selectedComponents (activity, filter) {
    return Filter.getFilter(activity, filter);
  }

  function findComponentByName (object, name) {
    return lodash.filter(object, {'name': name})[0];
  }

  function availableComponents (activity) {
    return lodash.differenceBy(Activity.getOriginalActivity(activity).properties, selectedFilters(activity), 'name');
  }

  function updateActivity (activity, data) {
    var obtainedActivity = Activity.getActivity(activity);
    obtainedActivity.properties = data;
  }

  // ======
  // Public
  // ======

  this.getOriginalComponent = function (activity, filter, component) {
    return findComponentByName(Filter.getOriginalFilter(activity, filter), component);
  };

  this.getComponent = function (activity, filter, component) {
    return findComponentByName(selectedComponents(activity, filter), component);
  };

  this.updateComponent = function (activity, filter, component, data) {
    var index = lodash.findIndex(selectedComponents(activity, filter), ['name', component]);
    selectedFilters(activity)[index] = data;
    updateActivity(activity);
  };

});
