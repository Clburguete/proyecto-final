/*jshint esversion: 6*/
const express        = require("express");
const authController = express.Router();
const passport = require("passport");

// Our user model
const User           = require("../model/user");

// Bcrypt let us encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;


authController.post("/signup", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;



  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.status(400).json({ message: "The username already exists" });
        return;
      }

      var salt     = bcrypt.genSaltSync(bcryptSalt);
      var hashPass = bcrypt.hashSync(password, salt);
      var newUser = User({
        username,
        password: hashPass,
        role
      });

      newUser.save((err) => {
        if (err) {
          res.status(400).json({ message: "Something went wrong" });
        } else {
          req.login(newUser, function(err) {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: 'something went wrong :('
              });
            }
            res.status(200).json(newUser);
          });
        }
      });
    });
});

authController.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, function(err) {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }

      res.status(200).json(user);
    });
  })(req, res, next);
});

authController.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

authController.get("/loggedin", function(req, res) {
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  return res.status(403).json({ message: 'Unauthorized' });
});

authController.get("/private", (req, res) => {
  if(req.isAuthenticated()) {
    return res.json({ message: 'This is a private message' });
  }

  return res.status(403).json({ message: 'Unauthorized' });
});



module.exports = authController;
