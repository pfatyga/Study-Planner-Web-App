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

		$scope.courses = [
			/*{
				name: ""
			}*/
		];

		$scope.addCourse = function(name) {
			$scope.courses.push({ name: name });
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
