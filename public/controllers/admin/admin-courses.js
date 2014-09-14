angular.module('MyApp')
	.controller('AdminCoursesController', ['$scope', 'CourseManager', function($scope, CourseManager) {
		$scope.courses = CourseManager.getCourses();
		console.log($scope.courses);

		$scope.deleteModal = {
			title: "Delete Course",
			content: "Are you sure you want to delete this course?"
		};
	}]);
