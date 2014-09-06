angular.module('MyApp')
	.controller('AdminAddDegreeMattController', ['$scope', function($scope) {
		console.log("AdminAddDegreeMattController is running");
		$scope.rootRequirement = {
			//parent: null,
			type: 'AllOrAnyRequirement',
			allOrAny: 'All',
			requirements: [
				{
					//parent: $scope.rootRequirement,
					type: 'CourseGroupRequirement',
					numCourses: 'All',
					courseGroup: ''
				}
			]
		}
	}]);
