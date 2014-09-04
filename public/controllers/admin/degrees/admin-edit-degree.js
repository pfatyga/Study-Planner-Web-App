angular.module('MyApp')
	.controller('AdminEditDegreeController', ['$scope', '$stateParams', function($scope, $stateParams) {
		console.log('degreeId: ' + $stateParams.courseGroupId);
	}]);
