angular.module('MyApp')
	.controller('AdminAddCourseGroupController', ['$scope', function($scope) {
		$scope.courses = [
		];

		$scope.addCourse = function() {
			$scope.courses.unshift({ name: $scope.courseToAdd });
			$scope.courseToAdd = "";
		}

		$scope.deleteCourse = function(index) {
			$scope.courses.splice(index, 1);
		}
	}]);
