var app = angular.module('ngapp',[]);
app.controller('EventController',function EventController ($scope) {
	$scope.count = 0;
	$scope.$on('myevent',function  (e,d) {
		$scope.count++;
	})
})