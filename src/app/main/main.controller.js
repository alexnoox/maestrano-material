(function() {
  'use strict';

  angular
  .module('material')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $mdSidenav, gridTileService, muppetService) {
    var vm = this;

    vm.selected = null;

    muppetService.loadAll().then(function(muppets){
      vm.muppets = muppets;
      vm.selected = vm.muppets[0];
    });

    gridTileService.loadGridModel({
      icon : "avatar:svg-",
      title: "Widget ",
      background: ""
    }).then(function(tiles){
      vm.tiles = tiles;
    });

    //*******************
    // Internal Methods
    //*******************
    vm.toggleSidenav = function() {
      $log.debug('toggleSidenav');
      $mdSidenav('right').toggle();
    };

    vm.selectMuppet = function(muppet) {
      $log.debug('selectMuppet ' + muppet);
      vm.selected = angular.isNumber(muppet) ? vm.muppets[muppet] : muppet;
      $mdSidenav('right').close();
    };
  }
})();
