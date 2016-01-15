'use strict';

describe('module: main, controller: PreferencesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var PreferencesCtrl;
  beforeEach(inject(function ($controller) {
    PreferencesCtrl = $controller('PreferencesCtrl');
  }));

  it('should do something', function () {
    expect(!!PreferencesCtrl).toBe(true);
  });

});
