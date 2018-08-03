angular.module('App',[])
.controller('myController', ['$scope', function($scope){
	$scope.firstName="Sai";
	$scope.lastName="Nikhil";
	alert("called");
}]);