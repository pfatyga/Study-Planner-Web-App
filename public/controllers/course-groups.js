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

		$scope.addCourseOld = function() {
			//console.log("adding course");
			//$scope.courses.push({ name: "" });

			// TODO - Focus on next input
			
		};

		$scope.removeCourseOld = function(index) {
			console.log("removing course at index " + index);
			if ($scope.courses.length > 1) {
				$scope.courses.splice(index, 1);
			}
			else {
				$scope.courses[index].name = "";
			}
		}

		$scope.addCourse = function(name) {
			$scope.courses.push({ name: name });
			name = "";
		}

		$scope.removeCourse = function() {
			console.log("removing course");

			// TODO - remove selected courses
		}

		$scope.deleteModal = {
		};

		$scope.deleteCourseGroup = function() {
			confirm('Are you sure?');
		};
	}]);
