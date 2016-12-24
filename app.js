var directiveMadness = angular.module('directiveMadness', []);
directiveMadness.controller('MainCtrl', ['$scope', function($scope) {

  }]
);
directiveMadness.directive('mainNav', function() {
  return {
    templateUrl: 'directives/mainNav.html',
    restrict: "E",
    scope: {}
  };
})
directiveMadness.directive('radioForm', function() {
  return {
    templateUrl: 'directives/radioForm.html',
    restrict: "E",
    scope: {}
  };
})
directiveMadness.directive('mainHeader', function() {
  return {
    template: '<h1><ng-transclude></ng-transclude></h1>',
    restrict: "E",
    transclude: true,
    scope: {}
  };
})
directiveMadness.directive('copyright', function() {
  function copyrightCallback(scope, element, attributes){
    var dteNow = new Date();
    var intYear = dteNow.getFullYear();
    element.find('span').html(element.find('span').html() + ' '+ intYear);
  }
  return {
    templateUrl: 'directives/copyright.html',
    restrict: "E",
    transclude: true,
    scope: {},
    link: copyrightCallback
  };
})
directiveMadness.directive('colorize', function() {
  function colorizeCallback(scope, element, attributes){
    element.css("background-color", scope.background).css("color", scope.color);
  }
  return {
    restrict: "A",
    scope: {
      color: '@',
      background: '@'
    },
    link: colorizeCallback
  };
})