angular.module('MyApp')
    .controller('StudentStudyPlanBuilderController', ['$scope', '$state', 'DegreeManager',
				function($scope, $state, DegreeManager) {
        $scope.degrees = DegreeManager.getDegrees();
        $scope.selectedDegree = $scope.degrees[0].name;

        $scope.semesters = [
            "Spring",
            /* "Summer", */
            "Fall"
        ];
        $scope.selectedBeginningSemester = $scope.semesters[1];
        $scope.selectedGraduationSemester = $scope.semesters[0];

        $scope.years = [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ];

        $scope.selectedBeginningYear = $scope.years[0];
        $scope.selectedGraduationYear = $scope.years[4];

		$scope.generateStudyPlan = function() {
			$state.go('student.study-plan');
		};

		$scope.courses = [
			'CS-105',
			'CS-110',
			'CS-115',
			'CS-135',
			'CS-146',
			'CS-181',
			'CS-182',
			'CS-284',
			'CS-306',
			'CS-334',
			'CS-347',
			'CS-370',
			'CS-383',
			'CS-385',
			'CS-392',
			'CS-423',
			'CS-442',
			'CS-443',
			'CS-465',
			'CS-485',
			'CS-488',
			'CS-492',
			'CS-496',
			'CS-497',
			'CS-498',
			'CS-499'
		];

    }]);
