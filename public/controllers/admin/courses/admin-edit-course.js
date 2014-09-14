angular.module('MyApp')
	.controller('AdminEditCourseController', ['$scope', '$stateParams', 'Course', function($scope, $stateParams, Course) {
		console.log('courseId: ' + $stateParams.courseId);

		$scope.course = Course.getCourse($stateParams.courseId);
		console.log($scope.course);

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
