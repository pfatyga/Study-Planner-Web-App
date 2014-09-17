angular.module('MyApp')
	.controller('AdminAddCourseController', ['$scope', '$state', 'CourseManager',
				function($scope, $state, CourseManager) {
		$scope.newCourse = new Course();

		// Adds the new course to the system
		$scope.addCourse = function() {
			// TODO - validate
			CourseManager.addCourse($scope.newCourse);
			$state.go('admin.courses');
		}

		$scope.preReqs = [
			[
				{ name: "" }
			]
		];

		$scope.preReqAnd = function() {
			$scope.preReqs.push([{ name: "" }]);
		};

		$scope.preReqOr = function(index) {
			$scope.preReqs[index].push({ name: "" });
		};

		$scope.coReqs = [
			[
				{ name: "" }
			]
		];

		$scope.coReqAnd = function() {
			$scope.coReqs.push([{ name: "" }]);
		};

		$scope.coReqOr = function(index) {
			$scope.coReqs[index].push({ name: "" });
		};
	}]);
