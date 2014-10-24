angular.module('MyApp')
    .controller('StudentStudyPlanBuilderController', ['$scope', '$state', 'DegreeManager',
				function($scope, $state, DegreeManager) {
        $scope.degrees = DegreeManager.getDegrees();
        $scope.selectedDegree = $scope.degrees[0].name;

        $scope.semesters = [
            "Spring",
            /* "Summer", */
            "Fall"
        ]
        $scope.selectedSemester = $scope.semesters[0];

        $scope.years = [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ]
        $scope.selectedYear = $scope.years[0];

		$scope.generateStudyPlan = function() {
			$state.go('student.study-plan');
		};
    }]);
