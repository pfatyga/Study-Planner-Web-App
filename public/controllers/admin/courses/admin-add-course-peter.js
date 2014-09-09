angular.module('MyApp')
	.controller('AdminAddCoursePeterController', ['$scope', function($scope) {
		//console.log("AdminAddCoursePeterController controller running");
		$scope.preReqs = [
			[	//this array element is AND'ed
				[	//this array element is OR'ed
					[	//this array element is AND'ed
						{ name: "CS 181" }	//this array element is OR'ed
					]
				]
			]
		];

		$scope.innerOr = function() {
			this.$parent.courseGroup.push({ name: "" });
		};

		$scope.innerAnd = function() {
			this.$parent.preReqSubGroup.push([{name: ""}]);
		};

		$scope.outerOr = function() {
			this.$parent.preReqGroup.push([[{name: ""}]]);
		};

		$scope.outerAnd = function() {
			this.$parent.preReqs.push([[[{name: ""}]]]);
		};

		$scope.coReqs = [
			[
				{ name: "" }
			]
		];

		$scope.coReqAnd = function() {
			$scope.coReqs.push([{ name: "" }]);
		};

		$scope.coReqOr = function(index) {
			$scope.coReqs[index].push({ name: "" });
		};
	}]);
