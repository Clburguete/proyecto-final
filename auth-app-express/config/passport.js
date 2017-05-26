/*jshint esversion: 6*/
const LocalStrategy  = require('passport-local').Strategy;
const User           = require('../model/user');
const Startup        = require('../model/startup');
const bcrypt       = require("bcrypt");

module.exports = function (passport) {
  passport.serializeUser((user, cb) => {
        cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }

      cb(null, user);
    });
  });
  passport.use(new LocalStrategy(
    {passReqToCallback: true},
    (req, username, password, next) => {
      console.log(req.body);
    if (req.body.role === "user") {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          return next(null, false, { message: "Incorrect username" });
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return next(null, false, { message: "Incorrect password" });
        }

        return next(null, user);
      });
    } else if (req.body.role === 'startup') {
      Startup.findOne({ username }, (err, startup) => {
        if (err) {
          return next(err);
        }

        if (!startup) {
          return next(null, false, { message: "Incorrect username" });
        }

        if (!bcrypt.compareSync(password, startup.password)) {
          return next(null, false, { message: "Incorrect password" });
        }
        return next(null, startup);
      });
    }
  }));


};
