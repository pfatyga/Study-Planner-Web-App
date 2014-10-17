/*
 *	API module
 *
 */

module.exports = function(app, connection) {
	return {
		// Gets array of courses
		getCourses: function(request, response, next) {
			console.log('getCourses');
			// TODO - get semesters offered
			connection.query('SELECT * FROM Course', function(error, rows, fields) {
				if (error) {
					console.error('error getting courses: ' + error.stack);
					return next(error);
				}

				console.log(rows);
				response.send(rows);
			});
		},

		// Get a course
		getCourse: function(request, response, next) {
			console.log('getCourse');
			// TODO - get semesters offered
			connection.query('SELECT * FROM Course WHERE courseId = ?', [request.params.id], function(error, rows, fields) {
				if (error) {
					console.error('error getting course with id ' + request.params.id + ': ' + error.stack);
					return next(error);
				}

				console.log(rows);
				response.send(rows[0]);
			});
		},

		// Create a new course
		postCourse: function(request, response, next) {
			// TODO
			response.send({
				"id": 2,
				"prefix": "CS",
				"number": 115,
				"name": "Introduction to Computer Science",
				"description": "",
				"coordinator": "",
				"preRequisites": [
				],
				"coRequisites": [
				],
				"credits": 3.0,
				"offeredFallOnCampus": true,
				"offeredSpringOnCampus": true,
				"offeredSummerOneOnCampus": false,
				"offeredSummerTwoOnCampus": false,
				"offeredFallWebCampus": false,
				"offeredSpringWebCampus": false,
				"offeredSummerOneWebCampus": false,
				"offeredSummerTwoWebCampus": false
			});
		},

		// Edit a course (or create new course if it doesn't exist)
		putCourse: function(request, response, next) {
			// TODO
			response.send({
				"id": 2,
				"prefix": "CS",
				"number": 115,
				"name": "Introduction to Computer Science",
				"description": "",
				"coordinator": "",
				"preRequisites": [
				],
				"coRequisites": [
				],
				"credits": 3.0,
				"offeredFallOnCampus": true,
				"offeredSpringOnCampus": true,
				"offeredSummerOneOnCampus": false,
				"offeredSummerTwoOnCampus": false,
				"offeredFallWebCampus": false,
				"offeredSpringWebCampus": false,
				"offeredSummerOneWebCampus": false,
				"offeredSummerTwoWebCampus": false
			});
		},

		// Delete a course
		deleteCourse: function(request, response, next) {
			// TODO
		},


		// Get array of course groups
		getCourseGroups: function(request, response, next) {
			// TODO
		},

		// TODO - get, post, put, delete course group


		// Get array of degrees
		getDegrees: function(request, response, next) {
			// TODO
		}

		// TODO - get, post, put, delete degree
	};
};
