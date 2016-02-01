'use strict';

describe('module: main, service: Root', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Root;
  beforeEach(inject(function (_Root_) {
    Root = _Root_;
  }));

  it('should do something', function () {
    expect(!!Root).toBe(true);
  });

});
