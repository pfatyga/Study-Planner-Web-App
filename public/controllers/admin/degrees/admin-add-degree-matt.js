angular.module('MyApp')
	.controller('AdminAddDegreeMattController', ['$scope', function($scope) {
		// Test RequirementExpressionParser
		RequirementExpressionParser.test();

		$scope.allCourses = [
			'CS 105',
			'CS 110',
			'CS 115',
			'CS 135',
			'CS 146',
			'CS 181',
			'CS 182',
			'CS 284',
			'CS 306',
			'CS 334',
			'CS 347',
			'CS 370',
			'CS 383'
		];

		$scope.allCourseGroups = [
			'CS 110 Core',
			'CS 115 Core',
			'CS 181 Core',
			'Physics',
			'Chemistry',
			'Chem & Bio 1',
			'Chem & Bio 2',
			'Physics & Bio',
			'Math',
			'Project Management',
			'Physical Education',
			'Technical Electives',
			'Software Development Electives',
			'Science/Math Electives',
			'Free Electives',
			'Humanities'
		];

		$scope.rootRequirement = {
			//parent: null,
			type: 'BoolRequirement',
			operator: 'AND',
			childRequirements: [
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
				return '\'' + requirement.courseName + '\'';
			}
			else if (requirement.type === 'CourseGroupRequirement') {
				return '\'' + requirement.numCourses + ' from ' + requirement.courseGroup + '\'';
			}
			else if (requirement.type === 'BoolRequirement') {
				var result = '(';

				for (var i = 0; i < requirement.childRequirements.length; i++) {
					result += $scope.getRequirementBooleanExpressionRecursive(requirement.childRequirements[i]);
					
					if (i + 1 < requirement.childRequirements.length) {
						if (requirement.operator === 'AND') {
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
