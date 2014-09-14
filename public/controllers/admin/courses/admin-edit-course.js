angular.module('MyApp')
	.controller('AdminEditCourseController', ['$scope', '$stateParams', '$state', 'Course',
				function($scope, $stateParams, $state, Course) {
		// Get course to be edited
		$scope.course = Course.getCourse($stateParams.courseId);

		// Clone course
		$scope.editedCourse = JSON.parse(JSON.stringify($scope.course));

		// Saves the edited course
		$scope.saveCourse = function() {
			// TODO - validate
			Course.editCourse($scope.editedCourse);
			$state.go('admin.courses.list');
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
