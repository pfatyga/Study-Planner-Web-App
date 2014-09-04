angular.module('MyApp')
	.controller('AdminDegreesController', ['$scope', function($scope) {
		// TODO - use databse
		$scope.degrees = [
			{
				id: 0,
				name: 'Computer Science (CS)',
				startingWith: 'CS 115',
				semester: 'Fall 2015'
			},
			{
				id: 1,
				name: 'Cybersecurity (CyS)',
				startingWith: 'CS 105',
				semester: 'Fall 2015'
			}
		];

		$scope.deleteModal = {
			title: "Delete Degree",
			content: "Are you sure you want to delete this degree?"
		};
	}]);
