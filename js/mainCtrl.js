var app = angular.module('quoteBook');

app.controller('MainController', function($scope, 'mainService'){

	$scope.getData = function(){
		$scope.object = mainService.getData();
	};

}


});