'use strict';

describe('Controller: ThreeCtrl', function () {

  // load the controller's module
  beforeEach(module('nrichApp'));

  var ThreeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThreeCtrl = $controller('ThreeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
