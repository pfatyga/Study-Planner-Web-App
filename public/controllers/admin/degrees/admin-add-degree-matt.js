angular.module('MyApp')
	.controller('AdminAddDegreeMattController', ['$scope', function($scope) {
		console.log("AdminAddDegreeMattController is running");
		$scope.rootRequirement = {
			type: 'AllorAnyRequirement',
			allOrAny: 'All',
			requirements: [
				{
					type: 'CourseGroupRequirement',
					numCourses: 1,
					courseGroup: 'CS'
				}
			]
		}

		$scope.addRequirement = function() {
			$scope.rootRequirement.requirements.push({
				type: 'CourseGroupRequirement',
				parent: $scope.rootRequirement,
				numCourses: 1,
				courseGroup: 'CS'
			});
		}

		$scope.deleteRequirement = function(index) {
			$scope.rootRequirement.requirements.splice(index, 1);
		}
	}]);
