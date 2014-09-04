angular.module('MyApp')
	.controller('AdminEditCourseGroupController', ['$scope', '$stateParams', function($scope, $stateParams) {
		console.log('courseGroupId: ' + $stateParams.courseGroupId);
	}]);
