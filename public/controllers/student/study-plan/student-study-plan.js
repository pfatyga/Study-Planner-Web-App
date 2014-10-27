angular.module('MyApp')
    .controller('StudentStudyPlanController', ['$scope', "DegreeManager", function($scope, DegreeManager) {
        $scope.semesters = [
			{
				name: 'Fall 2015',
				courses: [
					{ name: 'CS 111', credits: 3.0, requirement: 'CS Core' },
					{ name: 'CS 112', credits: 3.0, requirement: 'CS Core' },
					{ name: 'CS 113', credits: 3.0, requirement: 'CS Core' },
					{ name: 'MA 331', credits: 3.0, requirement: 'Math' }
				]
			},
			{
				name: 'Spring 2016',
				courses: [
					{ name: 'CS 211', credits: 3.0, requirement: 'CS Core' },
					{ name: 'CS 212', credits: 3.0, requirement: 'CS Core' },
					{ name: 'CS 573 or CS 546 or CS 549', credits: 3.0, requirement: 'Technical Elective' },
					{ name: 'MA 431', credits: 3.0, requirement: 'Math' }
				]
			}
		];
    }]);
