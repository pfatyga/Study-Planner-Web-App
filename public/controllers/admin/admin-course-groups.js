angular.module('MyApp')
	.controller('AdminCourseGroupsController', ['$scope', 'CourseGroup', function($scope, CourseGroup) {
		$scope.courseGroups = CourseGroup.getCourseGroups();

		$scope.deleteModal = {
			title: "Delete Course Group",
			content: "Are you sure you want to delete this course group?"
		};
	}]);
