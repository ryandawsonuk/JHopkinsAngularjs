(function(){
'use strict';
angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope){
  $scope.name="Ryan";
  $scope.sayHello = function(){
    return "Hello Coursera";
  };
});

})();
