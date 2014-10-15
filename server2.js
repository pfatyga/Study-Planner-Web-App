var util = require('util');

// Express
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// ClearDB MySQL
var mysql = require('mysql');

var sqlConnectionString =
	process.env.DATABASE_URL ||
	'mysql://bf0175e1c875c1:541ad396@us-cdbr-iron-east-01.cleardb.net/heroku_679357c24f93f45?reconnect=true';

var connection = mysql.createConnection(sqlConnectionString);

connection.connect(function(error) {
	if (error) {
		console.error('error connecting to db: ' + error.stack);
		return;
	}

	console.log('connected to db as id ' + connection.threadId);
});

// Test query
connection.query('SELECT 1 + 1 AS solution', function(error, rows, fields) {
	if (error) {
		console.error('error executing query: ' + error.stack);
	}

	console.log('solution is: ' + rows[0].solution);
});

//connection.end();

// Create server
var app = express();

// Config
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
//app.use(session({ secret: 'cs443' }));
app.use(express.static(path.join(__dirname, 'public')));
/*app.use(function(req, res, next) {
	if(req.user) {
		res.cookie('user', JSON.stringify(req.user));
	}
	next();
});*/


// API

// Get courses
app.get('/api/courses', function(request, response, next) {
	//console.log('getting courses from database');
	// TODO - write SQL query to actually get courses
	connection.query('SELECT 1 + 1 AS courses', function(error, rows, fields) {
		if (error) {
			console.error('error getting courses: ' + error.stack);
			return next(error);
		}

		//console.log('sending courses');
		// TODO - send actual courses from database
		response.send([
			{
				"id": 0,
				"prefix": "CS",
				"number": 105,
				"name": "Introduction to Scientific Computing",
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
			},
			{
				"id": 1,
				"prefix": "CS",
				"number": 110,
				"name": "Creative Problem Solving with Computing",
				"description": "",
				"coordinator": "",
				"preRequisites": [
				],
				"coRequisites": [
				],
				"credits": 3.0,
				"offeredFallOnCampus": true,
				"offeredSpringOnCampus": false,
				"offeredSummerOneOnCampus": false,
				"offeredSummerTwoOnCampus": false,
				"offeredFallWebCampus": false,
				"offeredSpringWebCampus": false,
				"offeredSummerOneWebCampus": false,
				"offeredSummerTwoWebCampus": false
			},
			{
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
			},
		]);
	});
});

// Get course groups
app.get('/api/course-groups', function(request, response, next) {
	// TODO - get course groups from database
});

// Get degrees
app.get('/api/degrees', function(request, response, next) {
	// TODO - get degrees from database
});


// Fix issue with linking to pages
app.get('*', function(req, res) {
	res.redirect('/#' + req.originalUrl);
});


// Start server
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

