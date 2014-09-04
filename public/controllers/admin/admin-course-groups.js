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

		$scope.courses = [
			/*{
				name: ""
			}*/
		];

		$scope.addCourse = function(name) {
			$scope.courses.unshift({ name: name });
			name = "";
		}

		$scope.removeCourse = function() {
			console.log("removing course");

			// TODO - remove selected courses
		}

		$scope.deleteModal = {
			title: "Delete Course Group",
			content: "Are you sure you want to delete this course group?"
		};

		$scope.deleteCourseGroup = function() {
			confirm('Are you sure?');
		};
	}]);
