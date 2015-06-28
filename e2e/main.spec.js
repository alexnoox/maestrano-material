'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should list 4 muppets', function () {
    expect(page.thumbnailEls.count()).toEqual(4);
  });

});
