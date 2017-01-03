(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items','categoryShortName'];
function ItemsController(items,categoryShortName) {
  var itemList = this;
  itemList.items = items;
  itemList.categoryShortName = categoryShortName;
}

})();
