(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.messageColor = "";

  $scope.checkIfTooMuch = function(){

    if($scope.dishes) { //dishes is set

      //includes bonus 1 - not allowing empty entries to count towards total
      var arrayOfDishes = $scope.dishes.split(',').filter(function(dish) {
            return !!dish.trim();
      });

      if(arrayOfDishes.length > 3){
        $scope.message = "Too much!";
      }else{
        $scope.message = "Enjoy!";

      }
      $scope.messageColor = "green";

    } else{  //no dishes
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
    }

  };

  $scope.getMessageColor = function() {
     return $scope.messageColor;
   };
};

})();
