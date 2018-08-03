angular.module('myApp',[])
.controller('mycontroller',['$scope',function($scope){
	$scope.sayHello=function(){
		$scope.greeting="Hello" +"Welcome to AngularJS Class";
		alert("called");
	}
	 $scope.visible=true;
	$scope.hide=true;
	$scope.condition=true;
	$scope.nikhil=function(){
		$scope.Nikhil=true;
	}
}]);