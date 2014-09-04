angular.module('MyApp')
	.controller('CoursesController', ['$scope', function($scope) {
		// Test courses, should be loaded from a database
		$scope.courses = [
			{
				prefix: "CS",
				number: 284,
				name: "Data Stuctures",
				preRequisites: [
					"CS 115"
				],
				coRequisites: [
					"CS 135"
				],
				credits: 3.0,
				offeredFallOnCampus: true,
				offeredSpringOnCampus: true,
				offeredSummerOneOnCampus: false,
				offeredSummerTwoOnCampus: false,
				offeredFallWebCampus: false,
				offeredSpringWebCampus: false,
				offeredSummerOneWebCampus: false,
				offeredSummerTwoWebCampus: false,
			}
		];
	}]);
