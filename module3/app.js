(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.getMatchedMenuItems = function (searchTerm) {
    if(!searchTerm){ //if no search term then no results
      menu.found = [];
      return ;
    }

    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
        menu.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
     return $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json"),
     }).then(function (result) {

       // process result and only keep items that match
       var foundItems = service.checkName(searchTerm,result.data.menu_items);

       // return processed items
       return foundItems;
     });
   };

  service.checkName = function(searchTerm, found){
    var result = [];

    for (var index = 0; index < found.length; index++) {
      if (found[index].description.indexOf(searchTerm) != -1) {
        result.push(found[index]);
      }
    }
    return result;
  };

}

})();
