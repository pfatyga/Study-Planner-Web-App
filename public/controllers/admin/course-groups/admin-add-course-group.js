angular.module('MyApp')
	.controller('AdminAddCourseGroupController', ['$scope', '$state', 'Course', 'CourseGroup',
				function($scope, $state, Course, CourseGroup) {
		// Get list of all courses for autocomplete
		$scope.allCourses = Course.getCourses().map(function(course) {
			return course.prefix + ' ' + course.number;
		});

		$scope.newCourseGroup = {
			name: "",
			courses: []
		};

		$scope.courses = [
		];

		$scope.addCourse = function() {
			var isValidCourse = $scope.allCourses.indexOf($scope.courseToAdd) >= 0;
			if (!isValidCourse) {
				return;
			}

			var isAlreadyInGroup = $scope.newCourseGroup.courses.indexOf($scope.courseToAdd) >= 0;
			if (isAlreadyInGroup) {
				return;
			}

			$scope.newCourseGroup.courses.unshift(""+$scope.courseToAdd);
			$scope.courseToAdd = "";
		}

		$scope.deleteCourse = function(index) {
			$scope.newCourseGroup.courses.splice(index, 1);
		}

		$scope.addCourseGroup = function() {
			CourseGroup.addCourseGroup($scope.newCourseGroup);
			$state.go('admin.course-groups');
		}
	}]);
