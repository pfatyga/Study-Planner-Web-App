angular.module('MyApp')
    .controller('StudentStudyPlanController', ['$scope', "DegreeManager", function($scope, DegreeManager) {
        $scope.semesters = [
			{
				name: 'Fall 2015',
				courses: [
					'CS 111',
					'CS 112',
					'CS 113',
					'MA 331'
				]
			},
			{
				name: 'Spring 2016',
				courses: [
					'CS 211',
					'CS 212',
					'CS 573 or CS 546 or CS 549',
					'MA 431'
				]
			}
		];
    }]);
