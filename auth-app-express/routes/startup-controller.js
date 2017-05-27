/*jshint esversion: 6*/
const express        = require("express");
const startupController = express.Router();
const passport = require("passport");

// Our startup model
const Startup           = require("../model/startup");

startupController.get("/startups",function(req,res) {
  // if(req.isAuthenticated()){
    Startup.find((err, users)=>{
      return res.status(200).json(users);
    });
  // } else {
  //   return res.status(403).json({ message: 'Unauthorized'});
  // }

});

startupController.get("/startups/:id", function(req,res){
  userId = req.params.id;
  // if(req.isAuthenticated()){
    Startup.findById(userId,(err, user)=>{
      return res.status(200).json(user);
    });
  //  } else {
  //   return res.status(403).json({ message: 'Unauthorized'});
  // }
});

module.exports = startupController;
