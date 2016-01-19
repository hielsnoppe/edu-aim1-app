'use strict';

describe('module: main, service: Component', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Component;
  beforeEach(inject(function (_Component_) {
    Component = _Component_;
  }));

  it('should do something', function () {
    expect(!!Component).toBe(true);
  });

});
