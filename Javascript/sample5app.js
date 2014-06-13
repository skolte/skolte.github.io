// Code goes here
function Cntl2($scope) {
  var exprs = $scope.exprs = [];
  $scope.expr = '3*10|currency';
  $scope.addExp = function(expr) {
    exprs.push(expr);
  };

  $scope.removeExp = function(index) {
    exprs.splice(index, 1);
  };
}

var EventController = function($scope) {
    /*
     * expose the event object to the scope
     */
    $scope.clickMe = function(clickEvent) {
      $scope.clickEvent = simpleKeys(clickEvent);
      console.log(clickEvent);
    };

    /*
     * return a copy of an object with only non-object keys
     * we need this to avoid circular references
     */
    function simpleKeys (original) {
      return Object.keys(original).reduce(function (obj, key) {
        obj[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
        return obj;
      }, {});
    }
  };
  
var OneTimeBindingController = function($scope) {
    var counter = 0;
    var names = ['Sachin', 'Brian', 'Sunil', 'Rahul'];
    /*
     * expose the event object to the scope
     */
    $scope.clickMe = function(clickEvent) {
      $scope.name = names[counter % names.length];
      counter++;
    };
  };