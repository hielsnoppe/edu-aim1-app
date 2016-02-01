'use strict';
angular.module('main')
.controller('FilterCtrl', function ($stateParams) {
    this.name = $stateParams.name;
    this.activity = $stateParams.activity;
});
