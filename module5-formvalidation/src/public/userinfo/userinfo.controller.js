(function() {
  'use strict';

  angular
    .module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['UserService', 'ApiPath'];

  function UserInfoController(UserService, ApiPath) {
    var userInfoCtrl = this;

    userInfoCtrl.basePath = ApiPath;
    userInfoCtrl.user = UserService.getUser();
    userInfoCtrl.registered = !angular.equals({}, userInfoCtrl.user);

  }
})();
