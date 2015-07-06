(function() {
  'use strict';

  angular
    .module('material')
    .factory('gridTileService', gridTileService);

  /** @ngInject */
  function gridTileService($q) {
    function buildGridModel(tileTmpl){
      var it, results = [ ];
      for (var j=0; j<11; j++) {
        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        it.title = it.title + (j+1);
        it.sizeX = 1;
        it.sizeY = 1;
        switch(j+1) {
          case 1:
            it.sizeX = 2;
            it.row = 0;
            it.col = 0;
            it.background = "red";
            break;
          case 2:
            it.sizeX = 2;
            it.sizeY = 2;
            it.row = 0;
            it.col = 2;
            it.background = "green";
            break;
          case 3:
            it.row = 0;
            it.col = 4;
            it.background = "darkBlue";
            break;
          case 4:
            it.row = 0;
            it.col = 5;
            it.background = "blue";
            break;
          case 5:
            it.sizeX = 2;
            it.row = 1;
            it.col = 0;
            it.background = "yellow";
            break;
          case 6:
            it.row = 0;
            it.col = 4;
            it.background = "pink";
            break;
          case 7:
            it.sizeY = 2;
            it.row = 1;
            it.col = 5;
            it.background = "darkBlue";
            break;
          case 8:
            it.row = 2;
            it.col = 0;
            it.background = "purple";
            break;
          case 9:
            it.sizeX = 2;
            it.row = 2;
            it.col = 1;
            it.background = "deepBlue";
            break;
          case 10:
            it.row = 2;
            it.col = 3;
            it.background = "lightPurple";
            break;
          case 11:
            it.row = 2;
            it.col = 4;
            it.background = "yellow";
            break;
        }
        results.push(it);
      }
      return results;
    }

    // Promise-based API
    return {
      loadGridModel: function(tileTmpl) {
        // Simulate async nature of real remote calls
        return $q.when(buildGridModel(tileTmpl));
      }
    };
  }
})();

