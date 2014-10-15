var util = require('util');

// Express
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Postgres
var pg = require('pg');
//var dbConnectionString = "postgres://clcvftcamiymci:TMB7oWSQSlCcd1R38qRzzmc_G1@ec2-54-197-241-64.compute-1.amazonaws.com:5432/dcp6paofmas5fe";

console.log(process.env);
pg.connect(process.env.DATABASE_URL, function(error, client, done) {
	if (error) {
		return console.error('error fetching client from pool', error);
	}

	client.query('SELECT NOW() AS "currentTime"', function(error, result) {
		if (error) {
			return console.error('error running query', error);
		}

		console.log(result.rows[0].currentTime);
		
		client.end();
	})
});

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

// Fix issue with linking to pages
app.get('*', function(req, res) {
	res.redirect('/#' + req.originalUrl);
});

// Start server
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

