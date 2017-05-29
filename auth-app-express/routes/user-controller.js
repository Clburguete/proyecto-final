/*jshint esversion: 6*/
const express        = require("express");
const userController = express.Router();
const passport = require("passport");
const authChecker = require("../authCheckerMiddleWare");


// Our user model
const User           = require("../model/user");

userController.get("/investors", authChecker ,function(req,res) {
  // if(req.isAuthenticated()){
    User.find((err, users)=>{
      return res.status(200).json(users);
    });
  // } else {
  //   return res.status(403).json({ message: 'Unauthorized'});
  // }

});

userController.get("/investors/:id", authChecker, function(req,res){
  userId = req.params.id;
  // if(req.isAuthenticated()){
    User.findById(userId,(err, user)=>{
      return res.status(200).json(user);
    });
  // } else {
  //   return res.status(403).json({ message: 'Unauthorized'});
  // }
});
userController.get("/startups", authChecker ,function(req,res) {
  // if(req.isAuthenticated()){
    User.find((err, users)=>{
      return res.status(200).json(users);
    });
  // } else {
  //   return res.status(403).json({ message: 'Unauthorized'});
  // }

});

userController.get("/startups/:id", authChecker, function(req,res){
  userId = req.params.id;
  // if(req.isAuthenticated()){
    User.findById(userId,(err, user)=>{
      return res.status(200).json(user);
    });
  // } else {
  //   return res.status(403).json({ message: 'Unauthorized'});
  // }
});


module.exports = userController;
