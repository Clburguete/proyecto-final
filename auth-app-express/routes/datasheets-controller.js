/*jshint esversion: 6*/
const express        = require("express");
const datasheetController = express.Router();
const passport = require("passport");

// Our user model
const InvestorData           = require("../model/inversion-data");
const StartupData            = require("../model/startup-data");

datasheetController.post("/signup/investordata", (req, res, next) => {
  if(req.isAuthenticated()){
  console.log(req.body);


  console.log("DataSheet Created");


  console.log("USUARIO", req.user);
  const {connections, interests, budget, investreturn} = req.body;

      var newInvData = InvestorData({
        connections,
        interests,
        budget,
        investreturn
      });

      newInvData.save((err) => {
        if (err) {
          res.status(400).json({ message: "Something went wrong" });
        } else {
          req.login(newInvData, function(err) {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: 'something went wrong :('
              });
            }
            console.log(req.InvestorData);
            res.status(200).json(newInvData);
          });
        }
      });
      } else {
        return res.status(403).json({ message: 'Unauthorized'});
      }
});

datasheetController.post("/signup/startupdata", (req, res, next) => {
  console.log(req.body);


  console.log("DataSheet Created");



  const {category, lookingfor, investinterest, budget} = req.body;

      var newStartupData = StartupData({
        category,
        lookingfor,
        investinterest,
        budget
      });

      newStartupData.save((err) => {
        if (err) {
          res.status(400).json({ message: "Something went wrong" });
        } else {
          req.login(newStartupData, function(err) {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: 'something went wrong :('
              });
            }
            console.log(req.StartupData);
            res.status(200).json(req.StartupData);
          });
        }
      });
});


module.exports = datasheetController;
