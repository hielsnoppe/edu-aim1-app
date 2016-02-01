'use strict';

describe('module: main, controller: ResultCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ResultCtrl;
  beforeEach(inject(function ($controller) {
    ResultCtrl = $controller('ResultCtrl');
  }));

  it('should do something', function () {
    expect(!!ResultCtrl).toBe(true);
  });

});
