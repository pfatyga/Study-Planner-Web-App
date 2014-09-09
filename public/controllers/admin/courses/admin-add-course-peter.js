angular.module('MyApp')
	.controller('AdminAddCoursePeterController', ['$scope', function($scope) {
		//console.log("AdminAddCoursePeterController controller running");
		$scope.preReqs = [
			[
				[
					[
						{ name: "CS 181" }, {name: "CS 245" }
					],
					[
						{ name: "CS 192" }, {name: "CS 265" }
					]
				],
				[
					[
						{ name: "CS 123" }, {name: "CS 543" }
					],
					[
						{ name: "CS 865" }, {name: "CS 235" }
					]

				]
			]
		];

		$scope.innerOr = function() {
			this.$parent.courseGroup.push({ name: "" });
		};

		$scope.innerAnd = function(index) {
			$scope.preReqs[index].push({ name: "" });
		};

		$scope.outerOr = function() {
			$scope.preReqs.push([{ name: "" }]);
		};

		$scope.outerAnd = function(index) {
			$scope.preReqs[index].push({ name: "" });
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
