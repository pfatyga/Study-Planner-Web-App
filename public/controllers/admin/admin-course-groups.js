angular.module('MyApp')
	.controller('AdminCourseGroupsController', ['$scope', function($scope) {
		// TODO - load from database
		$scope.courseGroups = [
			{
				id: 0,
				name: "CS 110 Core",
				courses: [
					'CS 110',
					'CS 146',
					'CS 115',
					'CS 135',
					'CS 284',
					'CS 334',
					'CS 383',
					'CS 385',
					'CS 496',
					'CS 347',
					'CS 442',
					'CS 443',
					'CS 392',
					'CS 492',
					// CS 522, CS 546, or CS 548
					'CS 306',
					'CS 511',
					'CS 485',
					'CS 423',
					'CS 424'
				]
			},
			{
				id: 1,
				name: "CS 115 Core",
				courses: [
					'CS 146',
					'CS 115',
					'CS 135',
					'CS 284',
					'CS 334',
					'CS 383',
					'CS 385',
					'CS 496',
					'CS 347',
					'CS 442',
					'CS 443',
					'CS 392',
					'CS 492',
					// CS 522, CS 546, or CS 548
					'CS 306',
					'CS 511',
					'CS 485',
					'CS 423',
					'CS 424'
				]
			},
			{
				id: 2,
				name: "CS 181 Core",
				courses: [
					'CS 181',
					'CS 146',
					'CS 182',
					'CS 135',
					'CS 392',
					'CS 334',
					'CS 383',
					'CS 496',
					'CS 347',
					'CS 442',
					'CS 443',
					'CS 511',
					'CS 492',
					// CS 522, CS 546, or CS 548
					'CS 306',
					'CS 485',
					'CS 423',
					'CS 424'
				]
			},
			{
				id: 3,
				name: "Technical Electives",
				courses: []
			},
			{
				id: 4,
				name: "Software Development Electives",
				courses: []
			},
		];

		$scope.deleteModal = {
			title: "Delete Course Group",
			content: "Are you sure you want to delete this course group?"
		};
	}]);
