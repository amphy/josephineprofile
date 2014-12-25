'use strict';

//dependency injection
/*function AppCtrl ($scope) {
	$scope.name = "World!";
	$scope.updateName = function () {
		$scope.name = "World from function";
	}
}*/

var controllers = angular.module('dabbble.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module";
});

controllers.controller('ShotsListCtrl', function($scope, dribbble, $routeParams) {
	
	var list = $routeParams.list;
	
	dribbble.list(list).then(function(data) {
		$scope.list = data.data;
		console.log(data);
	});
	
	$scope.loadNextPage = function() {
		dribbble.list(list, {page: $scope.list.page + 1}).then(function(data) {
			console.log(data);
			$scope.list.page = data.data.page; //increment page
			
			$scope.list.shots = $scope.list.shots.concat(data.data.shots); //concatenate pages
		});
	}
	
});

//32:01
controllers.controller('ShotsCtrl', function($scope, dribbble, $routeParams) {
	
	var id = $routeParams.id;
	
	dribbble.shot(id).then(function(data) {
		$scope.shot = data.data;
		console.log(data);
	});
	
});