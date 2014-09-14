angular.module('MyApp')
	.factory('Course', [function() {
		return {
			// Test courses, should be loaded from a database
			courses: [
				{
					id: 0,
					prefix: "CS",
					number: 105,
					name: "Introduction to Scientific Computing",
					preRequisites: [
					],
					coRequisites: [
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
				},
				{
					id: 1,
					prefix: "CS",
					number: 110,
					name: "Creative Problem Solving with Computing",
					preRequisites: [
					],
					coRequisites: [
					],
					credits: 3.0,
					offeredFallOnCampus: true,
					offeredSpringOnCampus: false,
					offeredSummerOneOnCampus: false,
					offeredSummerTwoOnCampus: false,
					offeredFallWebCampus: false,
					offeredSpringWebCampus: false,
					offeredSummerOneWebCampus: false,
					offeredSummerTwoWebCampus: false,
				},
				{
					id: 2,
					prefix: "CS",
					number: 115,
					name: "Introduction to Computer Science",
					preRequisites: [
					],
					coRequisites: [
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
				},
				{
					id: 3,
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
			],

			getCourses: function() {
				return this.courses;
			},

			getCourse: function(courseId) {
				// TODO - error checking
				return this.courses[courseId];
			},

			addCourse: function(course) {
				// TODO
			},

			editCourse: function(course) {
				this.courses[course.id] = course;
			},

			deleteCourse: function(course) {
				// TODO
			}
		};
	}]);
