'use strict';

describe('Directive: ngConfirmClick', function () {

  // load the directive's module
  beforeEach(module('nrichApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-confirm-click></ng-confirm-click>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngConfirmClick directive');
  }));
});
