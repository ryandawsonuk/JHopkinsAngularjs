(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;
  service.user = {};

  service.getUser = function () {
    return service.user;
  };

  service.setUser = function (user){
    service.user = user;
  }
}



})();
