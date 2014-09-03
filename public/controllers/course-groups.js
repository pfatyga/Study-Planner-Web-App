angular.module('MyApp')
	.controller('CourseGroupsController', ['$scope', function($scope) {
		// TODO - load from database
		$scope.courseGroups = [
			{
				name: "Computer Science",
				courses: []
			},
			{
				name: "Technical Electives",
				courses: []
			},
			{
				name: "Software Development Electives",
				courses: []
			},
		];

		$scope.courses = [];

		$scope.deleteModal = {
		};

		$scope.deleteCourseGroup = function() {
			confirm('Are you sure?');
		};
	}]);
