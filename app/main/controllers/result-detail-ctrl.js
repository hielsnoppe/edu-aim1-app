'use strict';
angular.module('main')
.controller('ResultDetailCtrl', function ($log, $stateParams) {

  this.activities = $stateParams.activities;

  $log.log('Hello from your Controller: ResultDetailCtrl in module main:. This is your controller:', this);

});
