'use strict';
angular.module('main')
.controller('FilterCtrl', function ($stateParams, Root) {
    this.name = $stateParams.name;
    this.activity = $stateParams.activity;
    this.filter = Root.getFilter(this.activity, this.name);
});
