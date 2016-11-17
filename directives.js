var app = angular.module('directive', []);

app.directive('hello', function() {
  return {
    scope: {
      'subject': '@'
    },
    controller: function($scope) {
      if (!$scope.subject) {
        $scope.subject = 'world';
      }
    },
    template: '<h1>Hello, {{subject}}!</h1>'
  };
});

app.directive('btButton', function() {
  return {
    transclude: true,
    scope: {
      'type' : '='
    },
    controller: function($scope) {

    },
    template: '<button class="btn btn-default">Click me</button>'
  }
});
