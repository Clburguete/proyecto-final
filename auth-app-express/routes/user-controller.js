/*jshint esversion: 6*/
const express        = require("express");
const userController = express.Router();
const passport = require("passport");

// Our user model
const User           = require("../model/user");

userController.get("/investors",function(req,res) {
  if(req.isAuthenticated()){
    User.find((err, users)=>{
      return res.status(200).json(users);
    });
  } else {
    return res.status(403).json({ message: 'Unauthorized'});
  }

});

module.exports = userController;
// authController.get("/loggedin", function(req, res) {
//   if(req.isAuthenticated()) {
//     return res.status(200).json(req.user);
//   }
//
//   return res.status(403).json({ message: 'Unauthorized' });
// });
