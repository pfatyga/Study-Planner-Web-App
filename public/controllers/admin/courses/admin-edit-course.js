angular.module('MyApp')
	.controller('AdminEditCourseController', ['$scope', '$stateParams', function($scope, $stateParams) {
		console.log('courseId: ' + $stateParams.courseGroupId);
	}]);
