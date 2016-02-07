'use strict';
angular.module('main')
.factory('Filter', function ($log, Activity, Root) {

  $log.log('Hello from your Service: Filter in module main');

  this.getFilter = function (activity, filter) {
    for (var i = 0; i < this.activities[activity].filtersSelected.length; i++) {
      if (this.activities[activity].filtersSelected[i].name === filter) {
        return this.activities[activity].filtersSelected[i];
      }
    }
  };

});
