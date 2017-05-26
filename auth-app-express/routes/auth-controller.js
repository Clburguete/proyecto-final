/*jshint esversion: 6*/
const express        = require("express");
const authController = express.Router();
const passport = require("passport");

// Our user model
const User           = require("../model/user");
const Startup        = require("../model/startup");

// Bcrypt let us encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;


authController.post("/signup", (req, res, next) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;


  console.log("Sign up successful");

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }
  if (role === "user") {

    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.status(400).json({ message: "The username already exists" });
        return;
      }

      var salt     = bcrypt.genSaltSync(bcryptSalt);
      var hashPass = bcrypt.hashSync(password, salt);
      const { invest } = req.body;
      var newUser = User({
        username,
        password: hashPass,
        invest
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
            res.status(200).json(req.user);
          });
        }
      });
    });
  }else if (role === "startup") {
    Startup.findOne({ username }, "username", (err, startup) => {
      if (startup !== null) {
        res.status(400).json({ message: "The username already exists" });
        return;
      }

      var salt     = bcrypt.genSaltSync(bcryptSalt);
      var hashPass = bcrypt.hashSync(password, salt);

      const {category, budget} = req.body;

      var newStartup = Startup({
        username,
        password: hashPass,
        category,
        budget
      });

      newStartup.save((err) => {
        if (err) {
          res.status(400).json({ message: "Something went wrong" });
        } else {
          req.login(newStartup, function(err) {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: 'something went wrong :('
              });
            }
            res.status(200).json(req.startup);
          });
        }
      });
    });
  }
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
      //asigno roles antes de devolver objeto
      let user = Object.assign({role: req.body.role}, req.user.toObject());
      // console.log("login", user);
      res.status(200).json(user);
    });
  })(req, res, next);
});

authController.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

authController.get("/loggedin", function(req, res) {
    console.log("Auth Controller -->"+req.isAuthenticated())
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

authController.get("/private", (req, res) => {
  console.log(req.session);
  if(req.isAuthenticated()) {
    return res.json({ message: 'This is a private message' });
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authController;
