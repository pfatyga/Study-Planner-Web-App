angular.module('MyApp')
	.controller('AdminCourseListController', ['$scope', 'CourseManager', function($scope, CourseManager) {
		console.log('AdminCourseListController');
		// Get courses from CourseManager
		CourseManager.getCourses(function(courses) {
			$scope.courses = courses;
		});

		// Model for delete course modal
		$scope.deleteModal = {
			title: "Delete Course",
			content: "Are you sure you want to delete this course?"
		};
	}]);
