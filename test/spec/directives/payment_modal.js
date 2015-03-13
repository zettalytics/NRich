'use strict';

describe('Directive: paymentModal', function () {

  // load the directive's module
  beforeEach(module('nrichApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<payment-modal></payment-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the paymentModal directive');
  }));
});
