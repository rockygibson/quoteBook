angular.module('quoteBook').controller('MainController', function($scope, mainService){

	$scope.getData = function(){
		$scope.quotes = mainService.getData();
	};

$scope.getData();

	$scope.addQuote = function(){
		var obj = {text: $scope.quoteToAdd, author: $scope.authorToAdd}
		mainService.addData(obj);
	}

	$scope.removeQuote = function(quoteObject){
		mainService.removeData(quoteObject);
	}
});
