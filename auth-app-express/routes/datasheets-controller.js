/*jshint esversion: 6*/
const express = require("express");
const datasheetController = express.Router();
const passport = require("passport");

const User = require("../model/user");
const InvestorData = require("../model/inversion-data");
const StartupData = require("../model/startup-data");

datasheetController.post("/signup/investordata", (req, res, next) => {
    if (req.isAuthenticated()) {
        const {
            connections,
            interests,
            budget,
            investreturn
        } = req.body;

        var newInvData = InvestorData({
            connections,
            interests,
            budget,
            investreturn
        });
        newInvData.save()
          .then((data)=>res.status(200).json(data))
          .catch(err => res.status(400).json({
              message: "Something went wrong"
          }));
    }
});

datasheetController.post("/signup/startupdata", (req, res, next) => {





    const {
        category,
        lookingfor,
        investinterest,
        budget
    } = req.body;

    var newStartupData = StartupData({
        category,
        lookingfor,
        investinterest,
        budget
    });

    newStartupData.save()
      .then((data)=>res.status(200).json(data))
      .catch(err => res.status(400).json({
          message: "Something went wrong"
      }));
});
datasheetController.post("/signup/invrelate", (req, res, next) => {
  let query = {
        _id: req.body[1]
    };
    User.findByIdAndUpdate(query, {
        $set: {
            inv_datasheets: req.body[0]
        }
    }, (err, updatedUser) => {
        if (err) {
            return next(err);
        }
    });
});

datasheetController.post("/signup/startrelate", (req, res, next) => {
  let query = {
        _id: req.body[1]
    };

    User.findByIdAndUpdate(query, {
        $set: {
            start_datasheets: req.body[0]
        }
    }, (err, updatedUser) => {
        if (err) {
            return next(err);
        }
    });
});
datasheetController.post("/edit/investordata", (req, res, next) => {
  let query = {
        _id: req.body[1]
    };
  let newForm = req.body[0];

  User.findById(query, (err,success)=>{
    InvestorData.findByIdAndUpdate(success.inv_datasheets, {$set:newForm} ,(err,updatedForm)=>{
        if (err) {
          return next(err);
        }
    });
  });
});
datasheetController.post("/edit/startupdata", (req, res, next) => {
  let query = {
        _id: req.body[1]
    };
  let newForm = req.body[0];

  User.findById(query, (err,success)=>{
    StartupData.findByIdAndUpdate(success.inv_datasheets, {$set:newForm} ,(err,updatedForm)=>{
        if (err) {
          return next(err);
        }
    });
  });
});
module.exports = datasheetController;
