(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('material'));

    it('should load 4 muppets', inject(function($controller) {
      var ctrl = $controller('MainController');

      expect(angular.isArray(ctrl.muppets)).toBeTruthy();
      expect(ctrl.muppets.length === 4).toBeTruthy();
    }));
  });
})();
