'use strict';

describe('module: main, controller: ActivityCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ActivityCtrl;
  beforeEach(inject(function ($controller) {
    ActivityCtrl = $controller('ActivityCtrl');
  }));

  it('should do something', function () {
    expect(!!ActivityCtrl).toBe(true);
  });

});
