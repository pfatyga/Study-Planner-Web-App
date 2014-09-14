angular.module('MyApp')
	.controller('AdminCourseGroupsController', ['$scope', 'CourseGroupManager', function($scope, CourseGroupManager) {
		// Get course groups from course manager
		$scope.courseGroups = CourseGroupManager.getCourseGroups();

		// Model for delete course group modal
		$scope.deleteModal = {
			title: "Delete Course Group",
			content: "Are you sure you want to delete this course group?"
		};
	}]);
