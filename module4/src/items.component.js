(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
