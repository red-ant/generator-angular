'use strict';

describe('Controller: <%= _.classify(name) %>', function () {

  beforeEach(module('<%= moduleName %>'));

  var <%= _.classify(name) %>,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    <%= _.classify(name) %> = $controller('<%= _.classify(name) %>', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
