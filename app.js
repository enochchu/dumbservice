var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

/*
 * View engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Routes
 */

var index = require('./routes/index');
app.use('/', index);

var users = require('./routes/users');
app.use('/users', users);

/*
 * Routes - Error Handling
 */
app.use(
	function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	}
);

app.use(
	function(err, req, res, next) {

	res.locals.message = err.message;

	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
