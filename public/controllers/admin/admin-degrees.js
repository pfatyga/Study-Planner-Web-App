angular.module('MyApp')
	.controller('AdminDegreesController', ['$scope', 'DegreeManager', function($scope, DegreeManager) {
		$scope.degrees = DegreeManager.getDegrees();

		$scope.deleteModal = {
			title: "Delete Degree",
			content: "Are you sure you want to delete this degree?"
		};
	}]);
