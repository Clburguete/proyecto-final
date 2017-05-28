/*jshint esversion: 6*/
const express        = require("express");
const datasheetController = express.Router();
const passport = require("passport");

// Our user model
const InvestorData           = require("../model/inversion-data");


datasheetController.post("/signup/investordata", (req, res, next) => {
  console.log(req.body);


  console.log("DataSheet Created");



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
            res.status(200).json(req.InvestorData);
          });
        }
      });
});

// datasheetController.post("/login", function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//
//     if (!user) { return res.status(401).json(info); }
//
//     req.login(user, function(err) {
//       if (err) {
//         return res.status(500).json({
//           message: 'something went wrong :('
//         });
//       }
//
//       res.status(200).json(user);
//     });
//   })(req, res, next);
// });
//
// datasheetController.post("/logout", function(req, res) {
//   req.logout();
//   res.status(200).json({ message: 'Success' });
// });
//
// datasheetController.get("/loggedin", function(req, res) {
//     console.log("Auth Controller -->"+req.isAuthenticated());
//   if(req.isAuthenticated()) {
//     return res.status(200).json(req.user);
//   }
//
//   return res.status(403).json({ message: 'Unauthorized' });
// });
//
// datasheetController.get("/private", (req, res) => {
//   console.log(req.session);
//   if(req.isAuthenticated()) {
//     return res.json({ message: 'This is a private message' });
//   }
//
//   return res.status(403).json({ message: 'Unauthorized' });
// });

module.exports = datasheetController;
