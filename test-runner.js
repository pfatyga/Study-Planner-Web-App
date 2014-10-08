var util = require('util');

// Express
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Create server
var app = express();

// Config
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
console.log(path.join(__dirname, 'public/js'));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/test')));

app.get('*/js/*', function(req, res, next) {
	//console.log(util.inspect(req, false, 1) + '\n\n');
	var parts = req.url.split('/');
	//console.log(parts);
	var newPath = '/' + parts.slice(2).join('/');
	console.log(newPath);
	res.redirect(newPath);
});

// Redirect to test-runner.html
app.get('/', function(req, res) {
	res.redirect('/test-runner.html');
});

// Start server
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

