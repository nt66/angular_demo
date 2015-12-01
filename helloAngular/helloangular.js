var app = angular.module('ngapp',[]);
app.controller('HelloAngular',function HelloAngular ($scope) {
	$scope.greeting = {text:'hello'};
});

// function HelloAngular ($scope) {
// 	$scope.greeting = {text:'hello'};
// }
