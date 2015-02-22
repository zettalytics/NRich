'use strict';

describe('Controller: CleanCtrl', function () {

  // load the controller's module
  beforeEach(module('nrichApp'));

  var CleanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CleanCtrl = $controller('CleanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
