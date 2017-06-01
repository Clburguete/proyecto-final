/*jshint esversion: 6*/
const express        = require("express");
const userController = express.Router();
const passport = require("passport");
const authChecker = require("../authCheckerMiddleware");
// Our user model
const User           = require("../model/user");



userController.get("/investors",authChecker,function(req,res) {
  User.find((err, users)=>{
    let populatedUsers = users.map((user)=> {
      if(user.start_datasheets){
        return new Promise((resolve) => user.populate('start_datasheets',(err,success)=> resolve(success)));
      } else {
        return new Promise((resolve) => user.populate('inv_datasheets',(err,success)=> resolve(success)));
      }
    });

    Promise.all(populatedUsers).then( (users) => {
      return res.status(200).json(users);
    }).catch(reason => {
      console.log(reason);
    });
  });
});

userController.get("/investors/:id", authChecker, function(req,res){
  userId = req.params.id;
  let populatedUser;
    User.findById(userId,(err, user)=>{
      if (user.start_datasheets) {
        populatedUser =   new Promise((resolve)=> user.populate('start_datasheets',(err,success)=>resolve(success)));
      }else {
        populatedUser= new Promise((resolve) => user.populate('inv_datasheets',(err,success)=> resolve(success)));
      }
      populatedUser.then((user)=>  res.status(200).json(user));

    });

});
//Home page routes

userController.get("/home/investors" ,function(req,res) {
  // if(req.isAuthenticated()){
  User.find((err, users)=>{
    let populatedUsers = users.map((user)=> {
      if(user.start_datasheets){
        return new Promise((resolve) => user.populate('start_datasheets',(err,success)=> resolve(success)));
      } else {
        return new Promise((resolve) => user.populate('inv_datasheets',(err,success)=> resolve(success)));
      }
    });

    Promise.all(populatedUsers).then( (users) => {
      return res.status(200).json(users);
    }).catch(reason => {
      console.log(reason);
    });
  });
});

module.exports = userController;
