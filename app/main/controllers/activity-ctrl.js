'use strict';
angular.module('main')
  .controller('ActivityCtrl', function($log, $stateParams) {

    $log.log('Hello from your Controller: ActivityCtrl in module main:. This is your controller:', this);
    $log.log($stateParams.name);
  });
