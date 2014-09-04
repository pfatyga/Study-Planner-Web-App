angular.module('MyApp')
	.controller('AdminAddCourseController', ['$scope', function($scope) {
		console.log("AdminAddCourseController controller running");
		$scope.preReqs = 
			[
				[{name:""}]
			];
		$scope.preReqAnd = function () {
			$scope.preReqs.push([{name: ""}]);
		};
		$scope.preReqOr = function (index) {
			$scope.preReqs[index].push({name: ""});
		};
	}]);
