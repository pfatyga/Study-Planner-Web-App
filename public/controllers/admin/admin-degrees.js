angular.module('MyApp')
	.controller('AdminDegreesController', ['$scope', function($scope) {
		$scope.deleteModal = {
			title: "Delete Degree",
			content: "Are you sure you want to delete this degree?"
		};
	}]);
