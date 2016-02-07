'use strict';
angular.module('main')
.controller('FilterCtrl', function ($stateParams, Filter) {
    this.parentActivity = $stateParams.activity;
    this.activity = $stateParams.activity;
    this.filter = Filter.getFilter(this.activity, this.name);
});
