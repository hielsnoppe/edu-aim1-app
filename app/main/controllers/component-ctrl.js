'use strict';
angular.module('main')
.controller('ComponentCtrl', function ($log) {

  $log.log('Hello from your Controller: ComponentCtrl in module main:. This is your controller:', this);

});
