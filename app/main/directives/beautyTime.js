'use strict';
angular.module('main')
  .directive('formattedTime', function () {

    return {
      require: '?ngModel',
      link: function (scope, elem, attr, ngModel) {
        if (!ngModel) {
          return;
        }
        if (attr.type !== 'time') {
          return;
        }
        ngModel.$formatters.unshift(function (value) {
          // Replace the seconds & ms like :23.298 with nothing
          return value.replace(/:[0-9]+.[0-9]+$/, '');
        });
      }
    };
  });
