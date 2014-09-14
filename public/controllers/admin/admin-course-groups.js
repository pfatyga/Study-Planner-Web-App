angular.module('MyApp')
	.controller('AdminCourseGroupsController', ['$scope', 'CourseGroupManager', function($scope, CourseGroupManager) {
		$scope.courseGroups = CourseGroupManager.getCourseGroups();

		$scope.deleteModal = {
			title: "Delete Course Group",
			content: "Are you sure you want to delete this course group?"
		};
	}]);
