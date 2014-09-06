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

		$scope.requirementsBooleanExpression = '';

		$scope.getRequirementsBooleanExpression = function() {
			$scope.requirementsBooleanExpression = $scope.getRequirementBooleanExpressionRecursive($scope.rootRequirement);
		}

		$scope.getRequirementBooleanExpressionRecursive = function(requirement) {
			
			if (requirement.type === 'CourseRequirement') {
				return requirement.courseName;
			}
			else if (requirement.type === 'CourseGroupRequirement') {
				return requirement.numCourses + ' from ' + requirement.courseGroup;
			}
			else if (requirement.type === 'AllOrAnyRequirement') {
				var result = '(';

				for (var i = 0; i < requirement.requirements.length; i++) {
					result += $scope.getRequirementBooleanExpressionRecursive(requirement.requirements[i]);
					
					if (i + 1 < requirement.requirements.length) {
						if (requirement.allOrAny === 'All') {
							result += ' AND ';
						}
						else {
							result += ' OR ';
						}
					}
				}

				result += ')';

				return result;
			}
		}
	}]);
