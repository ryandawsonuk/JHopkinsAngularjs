(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

   service.getAllCategories = function () {

      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {

        //return promise
        return result.data;
      });
    };

    service.getItemsForCategory = function (category) {
       return $http({
         method: "GET",
         url: (ApiBasePath + "/menu_items.json"),
         params: {category: category}
       }).then(function (result) {

         //return promise
         return result.data.menu_items;
       });
     };
}

})();
