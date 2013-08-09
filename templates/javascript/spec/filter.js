'use strict';

describe('Filter: <%= _.camelize(name) %>', function() {

  beforeEach(module('<%= moduleName %>'));

  var <%= _.camelize(name) %>;

  beforeEach(inject(function ($filter) {
    <%= _.camelize(name) %> = $filter('<%= _.camelize(name) %>');
  }));

  it('should return the input prefixed with "<%= _.camelize(name) %> filter:"', function () {
    var text = 'angularjs';
    expect(<%= _.camelize(name) %>(text)).toBe('<%= _.camelize(name) %> filter: ' + text);
  });

});
