/*jshint esversion: 6*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session         = require("express-session");
const passport        = require("passport");
const MongoConnect    = require("connect-mongo")(session);

const userController = require ("./routes/user-controller");
const authController  = require("./routes/auth-controller");


var cors = require('cors');

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/passport-local");

var app = express();

var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: true,
    credentials: true
};

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('./config/passport')(passport);
// Passport config
app.use(session({
  secret: "passport-local-strategy",
  name: 'investNow',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 60000 },
  store: new MongoConnect({mongooseConnection: mongoose.connection, ttl: 24 * 60 *60})
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(cors(corsOptions));
app.options('*',cors(corsOptions));//include before other routes

app.use('/', authController);
app.use('/', userController);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*app.all('/*', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
