'use strict';

describe('Controller: AcquisitionCtrl', function () {

  // load the controller's module
  beforeEach(module('nrichApp'));

  var AcquisitionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcquisitionCtrl = $controller('AcquisitionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
