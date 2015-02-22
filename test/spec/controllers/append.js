'use strict';

describe('Controller: AppendCtrl', function () {

  // load the controller's module
  beforeEach(module('nrichApp'));

  var AppendCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppendCtrl = $controller('AppendCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
