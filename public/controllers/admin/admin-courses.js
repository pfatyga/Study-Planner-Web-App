angular.module('MyApp')
	.controller('AdminCoursesController', ['$scope', 'Course', function($scope, Course) {
		$scope.courses = Course.getCourses();
		console.log($scope.courses);

		$scope.deleteModal = {
			title: "Delete Course",
			content: "Are you sure you want to delete this course?"
		};
	}]);
