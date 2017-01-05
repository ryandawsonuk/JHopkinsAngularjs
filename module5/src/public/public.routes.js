(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.registration', {
      url: '/registration',
      controller: 'RegistrationController',
      controllerAs: 'reg',
      templateUrl: 'src/public/registration/registration.html',
      resolve: {
        menuNumbers: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems()
            .then(function(response) {
              return response.menu_items.map(function(item) {
                return item.short_name;
              });
          });
        }]
      }
    })
    .state('public.userinfo', {
      url: '/userinfo',
      templateUrl: 'src/public/userinfo/userinfo.html',
      controller: 'UserInfoController',
      controllerAs: 'userInfoCtrl'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
