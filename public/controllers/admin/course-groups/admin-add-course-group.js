angular.module('MyApp')
	.controller('AdminAddCourseGroupController', ['$scope', function($scope) {
		$scope.allCourses = [
			'CS 105',
			'CS 110',
			'CS 115'
		];

		$scope.courses = [
		];

		$scope.addCourse = function() {
			var isValidCourse = $scope.allCourses.indexOf($scope.courseToAdd) >= 0;
			if (!isValidCourse) {
				return;
			}

			var isAlreadyInGroup = $scope.courses.indexOf($scope.courseToAdd) >= 0;
			if (isAlreadyInGroup) {
				return;
			}

			$scope.courses.unshift(""+$scope.courseToAdd);
			$scope.courseToAdd = "";
		}

		$scope.deleteCourse = function(index) {
			$scope.courses.splice(index, 1);
		}
	}]);
