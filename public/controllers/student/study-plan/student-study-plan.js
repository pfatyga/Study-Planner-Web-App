angular.module('MyApp')
    .controller('StudentStudyPlanController', ['$scope', "DegreeManager", function($scope, DegreeManager) {
        $scope.title = "Study Plan Builder";
        $scope.submitText = "Generate Study Plan";

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
    }]);