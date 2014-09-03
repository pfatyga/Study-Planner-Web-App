angular.module('MyApp')
	.controller('CourseGroupsController', ['$scope', '$sce', function($scope, $sce) {
		$scope.tabs = [
			{
				title: $sce.trustAsHtml('Course Groups'),
				content: 'TODO'
			},
			{
				title: $sce.trustAsHtml('Add Course Group'),
				content: 'TODO'
			},
		];
	}]);
