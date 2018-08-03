angular.module('app',[])
.controller('controller',['$scope',function($scope){
	$scope.newpassword="";
	$scope.confirmpassword="";
// 	$scope.click=function(){
// 	if ($scope.newpassword==$scope.confirmpassword) {
// 		alert("password must match");
// 	}else{
// 		alert("please enter valid password");
// 	}
// }
$scope.click=function(){
	alert(angular.equals($scope.newpassword,$scope.confirmpassword));
}

}]);