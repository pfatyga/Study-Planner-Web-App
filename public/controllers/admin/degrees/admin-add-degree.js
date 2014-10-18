angular.module('MyApp')
	.controller('AdminAddDegreeController', ['$scope', function($scope) {
		console.log("AdminAddDegreeController is running");
        $scope.title = "Add Degree";
		$scope.reqs = 
			[
				[{name:""}]
			];
		$scope.reqAnd = function () {
			$scope.reqs.push([{name: ""}]);
		};
		$scope.reqOr = function (index) {
			$scope.reqs[index].push({name: ""});
		};
	}]);
