angular.module('myapp',[])
.controller('mycontroller',['$scope', function($scope){
	 $scope.firstName = "Amara";
    $scope.lastName = "Sai Nikhil";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
	
	
}]);