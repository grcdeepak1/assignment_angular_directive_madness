directiveMadness.controller('scopeCtrl', ['$scope', '$window', function ($scope, $window) {
  $scope.firstname = "Deepak";
  $scope.lastname = "Gov";
  $scope.sayhello = function (name) {
    $window.alert("Hello "+ name );
  };
}])
directiveMadness.directive('isolated', ['$window', function ($window) {
  return {
    templateUrl: 'directives/isolated.html',
    restrict: "E",
    scope: {
      fname: '=',
      lname: '@',
      dirhello: '&',
    },
    link: function (scope) {
      scope.fname = "two way changed";
      scope.lname = "one way changed";
      scope.dirhello = function (name) {
        $window.alert("Hello "+ name + " called from inside the directive");
      }
    },
  };
}]
)