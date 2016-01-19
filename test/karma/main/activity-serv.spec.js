'use strict';

describe('module: main, service: Activity', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Activity;
  beforeEach(inject(function (_Activity_) {
    Activity = _Activity_;
  }));

  it('should do something', function () {
    expect(!!Activity).toBe(true);
  });

});
