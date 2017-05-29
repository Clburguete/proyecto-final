/*jshint esversion: 6*/
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');
const bcrypt = require("bcrypt");

module.exports = function(passport) {
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        User.findOne({
            "_id": id
        }, (err, user) => {
            console.log("deserialize user--> " + user);
            if (err) {
                return cb(err);
            }
            cb(null, user);
        });
    });

    passport.use(new LocalStrategy({
            passReqToCallback: true
        },
        (req, username, password, next) => {
            console.log(req.body);
            User.findOne({
                username
            }, (err, user) => {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    return next(null, false, {
                        message: "Incorrect username"
                    });
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    return next(null, false, {
                        message: "Incorrect password"
                    });
                }

                return next(null, user);
            });
        }));
};
