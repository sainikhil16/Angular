angular.module('App',[])
.controller('myController', ['$scope', function($scope) {
  $scope.username = 'Sai Nikhil';

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + 'Welcome to AngularJS Class' + '!';
  };
}]);