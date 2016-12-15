(function(){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  toBuy.isEmpty = function () {
    return !toBuy.toBuyItems || toBuy.toBuyItems.length===0;
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  bought.isEmpty = function () {
    return !bought.boughtItems || bought.boughtItems.length===0;
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = ['cookies','chips','pepto bismol','cheese'];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
