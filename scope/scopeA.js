//scope可以查找root元素,类似原型链
var app = angular.module('ngapp',[]);
app.controller('GreetCtrl',function GreetCtrl($scope,$rootScope) {
	$scope.name = 'World';
	$rootScope.department = 'Angular';
	// $scope = {name:'World'};
	// $rootScope = {department:'Angular'};
});
app.controller('ListCtrl',function ListCtrl($scope) {
	$scope.names = ['hualingfeng','zhaodanwei','huayixing'];
	//$scope = {names:['hualingfeng','zhaodanwei','huayixing']};
});