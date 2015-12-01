var bookStoreModule = angular.module('my.new.module',[]);
bookStoreModule.service('Book',function Book ($rootScope) {
	var service = {
		books:[
			{title:'js开发指南',author:'david'},
			{title:'领透js',author:'陈鹤'}
		],
		addBook:function(book){
			console.log('added');
			service.books.push(book);
			$rootScope.$broadcast('books.update');
		}
	};
	return service;
}).controller('book.list',function booklist($scope,Book) {
	$scope.$on('books.update',function (e) {
		$scope.books = Book.books;
		$scope.$apply();
	});
	$scope.books = Book.books;
}).directive('addbookbutton',function(Book) {
	return {
		restrict:'A',
		link:function (scope,element,attrs) {
		   element.bind("click",function(e) {
		   	  Book.addBook({title:'深入浅出nodeJS',author:'朴灵'});
		   });
		}
	};
})