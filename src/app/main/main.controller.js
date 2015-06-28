(function() {
  'use strict';

  angular
  .module('material')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $mdSidenav, muppetService) {
    var ctrl = this;

    ctrl.selected = null;

    ctrl.loadMuppets();

    //*******************
    // Internal Methods
    //*******************
    ctrl.loadMuppets = function() {
      $log.debug('loadMuppets');
      muppetService.loadAll()
        .then(function(muppets){
          ctrl.muppets = muppets;
          ctrl.selected = ctrl.muppets[0];
        });
    };

    ctrl.toggleSidenav = function() {
      $log.debug('toggleSidenav');
      $mdSidenav('left').toggle();
    };

    ctrl.selectMuppet = function(muppet) {
      $log.debug('selectMuppet ' + muppet);
      ctrl.selected = angular.isNumber(muppet) ? ctrl.muppets[muppet] : muppet;
      $mdSidenav('left').close();
    };
  }
})();
