var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hidePoweredBy = require('hide-powered-by');
var helmet = require('helmet');
var methodOverride = require('method-override');
var ejs = require('ejs');
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config({ silent: true });

//Configuration load
var settings = require('./config/settings');
var config = (settings.env === 'dev') ? settings.dev : settings.prod;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Load ENV File
app.use(cors());
app.use(helmet());
console.log(config.db.host);

/*
mongoose.connect(`
        $ { config.db.host }
        $ { config.db.base }
        `, {
    useMongoClient: true,
});
*/

// view engine setup
//app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'public'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(hidePoweredBy());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

module.exports = app;