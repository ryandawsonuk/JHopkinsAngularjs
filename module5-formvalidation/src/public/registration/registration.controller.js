(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$scope', 'MenuService', 'UserService'];
function RegistrationController($scope, MenuService, UserService) {
  var reg = this;

  reg.userSaved = false;
  reg.validDishNumber = false;

  reg.validateMenuNumber = function() {
    var shortName = reg.user.favouritedish;
    //favorite dish should have number of menu item, which is short name as far as service goes
    MenuService.getMenuItemByShortName(shortName)
      .then(function(response) {
        //if a menu item is retrieved then pass validation
        reg.validDishNumber = true;
        //and also remember the menu item
        reg.user.menu_item = response;
      })
      .catch(function(response) {
        //case of promise error in api call
        reg.validDishNumber = false;
      });
  }

  reg.submit = function () {
    if ($scope.regForm.$valid && reg.validDishNumber) {
            //store the user
            UserService.setUser(reg.user);
            //mark as saved so we can inform user
            reg.userSaved = true;
          }
  };

}


})();
