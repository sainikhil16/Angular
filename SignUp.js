angular.module('NikhilApp',[])
.controller('NikhilController',['$scope',function($scope){
	$scope.genders=[{
		"Id": 1,
		"Name": "Male"
	}, {

		"Id": 2,
		"Name": "Female"
	}, {

		"Id": 3,
		"Name": "Others"
	}]
	$scope.UserData={};
	$scope.save=function(user){
		$scope.UserData=angular.copy(user);
		alert(JSON.Stringify($scope.UserData))
	}

}]);