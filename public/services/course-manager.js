angular.module('MyApp')
	.factory('CourseManager', ['$http', function($http) {
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
			].map(function(data) {
				return $.extend(new Course(), data);
			}),

			//courses: [],

			// Returns array of courses
			getCourses: function(callback) {
				console.log('getting courses');
				if (this.courses.length == 0 ) {
					// Get data from json file
					return $http.get('data/courses.json')
						.success(function(data) {
							this.courses = data.courses.map(function(course) {
								return $.extend(new Course(), course);
							});
							console.log(this.courses);
							callback(this.courses);
						})
						.error(function() {
							console.log('failed to read \'data/courses.json\'');
							return null;
						});
				}
				else {
					console.log(this.courses);
					callback(this.courses);
				}
			},

			getCourse: function(courseId, callback) {
				console.log('getting course');
				if (this.courses.length == 0 ) {
					return $http.get('data/courses.json')
						.success(function(data) {
							this.courses = data.courses.map(function(course) {
								return $.extend(new Course(), course);
							});
							callback(this.courses[courseId]);
						})
						.error(function() {
							console.log('failed to read \'data/courses.json\'');
							return null;
						});
				}
				else {
					callback(this.courses[courseId]);
				}
			},

			addCourse: function(course) {
				console.log('adding course');
				if (this.courses.length == 0 ) {
					$http.get('data/courses.json')
						.success(function(data) {
							this.courses = data.courses.map(function(course) {
								return $.extend(new Course(), course);
							});

							course.id = this.courses.length;
							this.courses.push(course);
							console.log(this.courses);
						})
						.error(function() {
							console.log('failed to read \'data/courses.json\'');
						});
				}
				else {
					course.id = this.courses.length;
					this.courses.push(course);
					console.log(this.courses);
				}
			},

			editCourse: function(course) {
				console.log('editing course');
				this.courses[course.id] = course;
			},

			deleteCourse: function(course) {
				// TODO
			}
		};
	}]);
