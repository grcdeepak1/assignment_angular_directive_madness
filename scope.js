directiveMadness.controller('scopeCtrl', ['$scope', '$window', function ($scope, $window) {
  $scope.twoWay = "Deepak";
  $scope.oneWay = "Gov";
  $scope.sayHello = function (name) {
    $window.alert("Hello " + name);
  };
}])
directiveMadness.directive('isolated', ['$window', function ($window) {
  return {
    templateUrl: 'directives/isolated.html',
    restrict: "E",
    scope: {
      twoWay: '=',
      oneWay: '@',
      sayDirectiveHello: '&',
    },
    link: function (scope) {
      scope.twoWay = "two way changed";
      scope.oneWay = "one way changed";
      scope.sayDirectiveHello = function (name) {
        $window.alert("Hello " + name + " from isolated directive");
      };
    },
  };
}]
)