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
const dataController = require("./routes/datasheets-controller");
const messageController = require("./routes/message-controller");

require("dotenv").config();
var cors = require('cors');

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

var app = express();

var corsOptions = {
    origin: true,
    credentials: true
};
app.use(cors(corsOptions));

//app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
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


app.use('/', authController);
app.use('/', userController);
app.use('/', dataController);
app.use('/', messageController);


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
