angular.module('MyApp')
	.controller('AdminCourseGroupsController', ['$scope', function($scope) {
		// TODO - load from database
		$scope.courseGroups = [
			{
				id: 0,
				name: "Computer Science",
				courses: []
			},
			{
				id: 1,
				name: "Technical Electives",
				courses: []
			},
			{
				id: 2,
				name: "Software Development Electives",
				courses: []
			},
		];

		$scope.deleteModal = {
			title: "Delete Course Group",
			content: "Are you sure you want to delete this course group?"
		};
	}]);
