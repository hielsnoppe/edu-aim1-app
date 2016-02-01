'use strict';

describe('module: main, service: Filter', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Filter;
  beforeEach(inject(function (_Filter_) {
    Filter = _Filter_;
  }));

  it('should do something', function () {
    expect(!!Filter).toBe(true);
  });

});
