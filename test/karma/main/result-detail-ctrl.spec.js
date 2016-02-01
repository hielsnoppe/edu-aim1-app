'use strict';

describe('module: main, controller: ResultDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ResultDetailCtrl;
  beforeEach(inject(function ($controller) {
    ResultDetailCtrl = $controller('ResultDetailCtrl');
  }));

  it('should do something', function () {
    expect(!!ResultDetailCtrl).toBe(true);
  });

});
