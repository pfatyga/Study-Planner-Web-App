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
var api = require('./api.js')(app, connection);

app.get('/api/courses', api.getCourses);
app.get('/api/courses/:id', api.getCourse);
app.post('/api/courses', api.postCourse);
app.put('/api/courses/:id', api.putCourse);
app.delete('/api/courses/:id', api.deleteCourse);

app.get('/api/course-groups', api.getCourseGroups);
/*app.get('/api/course-groups/:id', api.getCourseGroup);
app.post('/api/course-groups', api.postCourseGroup);
app.put('/api/course-groups/:id', api.putCourseGroup);
app.delete('/api/course-groups/:id', api.deleteCourseGroup);*/

app.get('/api/degrees', api.getDegrees);
/*app.get('/api/degrees/:id', api.getDegree);
app.post('/api/degrees', api.postDegree);
app.put('/api/degrees/:id', api.putDegree);
app.delete('/api/degrees/:id', api.deleteDegree);*/


// Fix issue with linking to pages
app.get('*', function(req, res) {
	res.redirect('/#' + req.originalUrl);
});


// Start server
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

