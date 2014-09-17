angular.module('MyApp')
	.controller('AdminDegreeListController', ['$scope', 'DegreeManager', function($scope, DegreeManager) {
		// Get degrees from DegreeManager
		$scope.degrees = DegreeManager.getDegrees();

		// Model for delete degree modal
		$scope.deleteModal = {
			title: "Delete Degree",
			content: "Are you sure you want to delete this degree?"
		};
	}]);
