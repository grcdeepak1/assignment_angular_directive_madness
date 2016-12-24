directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {
  $scope.quotes = [ { message: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
                    { message: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: " Albert Einstein" },
                  ];
  $scope.name = "Deepak"
  $scope.quoteParams = { }
  $scope.createQuote = function(valid, form) {
    if (valid) {
      var quote = {
         message: $scope.quoteParams.quotemessage,
         author: $scope.quoteParams.quoteauthor
       };
       $scope.quotes.push(quote);
       $scope.quoteParams = {};
       form.$setPristine();
       form.$setUntouched();
    }
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