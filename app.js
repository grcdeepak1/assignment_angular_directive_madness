var directiveMadness = angular.module('directiveMadness', []);

directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {
  $scope.quotes = [ { message: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
                    { message: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: " Albert Einstein" },
                  ];
  $scope.quoteMessage = "Hello World";
  $scope.quoteAuthor = "Deepak";
  $scope.createQuote = function() {
    if ($scope.quoteAuthor === '' ||
        $scope.quoteMessage === '')
    {
      return;
    }
    var quote = {
       message: $scope.quoteMessage,
       author: $scope.quoteAuthor
     };
     $scope.quotes.push(quote);
     $scope.quoteMessage = $scope.quoteAuthor = "";
  };
  $scope.deleteQuote = function(quote) {
    var index = $scope.quotes.indexOf(quote);
    $scope.quotes.splice(index, 1)
  }

  }]
);
directiveMadness.directive('quoteForm', function() {
  return {
    templateUrl: 'directives/quoteForm.html',
    restrict: "E",
    scope: true
  };
})
directiveMadness.directive('quotesIndex', function() {
  return {
    templateUrl: 'directives/quotesIndex.html',
    restrict: "E",
    scope: true
  };
})

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