angular.module('MyApp')
	.controller('AdminDegreesController', ['$scope', 'Degree', function($scope, Degree) {
		$scope.degrees = Degree.getDegrees();

		$scope.deleteModal = {
			title: "Delete Degree",
			content: "Are you sure you want to delete this degree?"
		};
	}]);
