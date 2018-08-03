angular.module('myApp', [])
.controller('MyController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.name = 'Digital Lync';
  $rootScope.course = 'AngularJS';
}])
.controller('ListController', ['$scope', function($scope) {
  $scope.names = ['Nikhil', 'Akhil', 'Krishna'];
}]);