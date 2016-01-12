'use strict';

describe('module: main, controller: PlanCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var PlanCtrl;
  beforeEach(inject(function ($controller) {
    PlanCtrl = $controller('PlanCtrl');
  }));

  it('should do something', function () {
    expect(!!PlanCtrl).toBe(true);
  });

});
