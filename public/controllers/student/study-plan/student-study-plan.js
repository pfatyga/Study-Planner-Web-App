angular.module('MyApp')
    .controller('StudentStudyPlanController', ['$scope', "DegreeManager", function($scope, DegreeManager) {
        $scope.title = "Study Plan Builder";
        $scope.submitText = "Generate Study Plan"

        $scope.degrees = DegreeManager.getDegrees();
        $scope.selectedDegree = $scope.degrees[0];
    }]);