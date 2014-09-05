angular.module('MyApp')
	.controller('AdminDetailDegreeController', ['$scope', '$stateParams', function($scope, $stateParams) {
		console.log('degreeId: ' + $stateParams.courseGroupId);
	}]);
