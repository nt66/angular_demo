var app = angular.module('ngapp',[]);
var app2 = angular.module('ngapp2',[]);

app.controller('HelloAngular',function HelloAngular ($scope) {
	$scope.sayUrl = "http://www.baidu.com";
	$scope.sayTitle = "hualingfeng";
})
.directive('sayHello',function () {
	return {
		restrict:'A',
		template:'<a href="{{sayUrl}}">{{sayTitle}}</a>',
		replace:true
	}
})
.directive('myDirective',function () {
	return{
		restrict:'E',
		template:'<a href="http://www.google.com">click me to go to google</a>'
	}
});
app2.directive('hello',function () {
	return{
		restrict:'A',
		template:'<div>Hi there <span ng-transclude></span></div>',
        transclude: true,
        replace:true
	}
})