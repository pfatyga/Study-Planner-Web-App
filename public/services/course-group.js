angular.module('MyApp')
	.factory('CourseGroup', [function() {
		return {
			// Test course groups, should be loaded from a database
			courseGroups: [
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
			].map(function(data) {
				return $.extend(new CourseGroup(), data);
			}),

			getCourseGroups: function() {
				return this.courseGroups;
			},

			getCourseGroup: function(courseGroupId) {
				// TODO - error checking
				// TODO - id is not always index
				return this.courseGroups[courseGroupId];
			},

			addCourseGroup: function(courseGroup) {
				courseGroup.id = this.courseGroups.length;
				this.courseGroups.push(courseGroup);
			},

			editCourseGroup: function(courseGroup) {
				this.courseGroups[courseGroup.id] = courseGroup;
			},

			deleteCourseGroup: function(courseGroup) {
				// TODO
			}
		};
	}]);
