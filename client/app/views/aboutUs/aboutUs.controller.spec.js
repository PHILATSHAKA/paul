'use strict';

describe('Component: AboutUsComponent', function () {

  // load the controller's module
  beforeEach(module('paulBlogAppApp'));

  var AboutUsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AboutUsComponent = $componentController('aboutUs', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
