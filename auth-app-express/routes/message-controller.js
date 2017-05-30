/*jshint esversion: 6*/
const express = require("express");
const messageController = express.Router();
const passport = require("passport");
const authChecker = require("../authCheckerMiddleWare");


const User = require("../model/user");
const Message = require("../model/message");

messageController.post(`/message/new`, (req, res, next) => {
    if (req.isAuthenticated()) {

        const {
            from,
            to,
            content
        } = req.body;

        var newMessage = Message({
            from,
            to,
            content
        });

        newMessage.save((err) => {
            if (err) {
                res.status(400).json({
                    message: "Something went wrong"
                });
            } else {
                req.login(newMessage, function(err) {
                    if (err) {
                        return res.status(500).json({
                            message: 'something went wrong :('
                        });
                    }
                    res.status(200).json(newMessage);
                });
            }
        });
    } else {
        return res.status(403).json({
            message: 'Unauthorized'
        });
    }
});

messageController.get("/messages/:id",authChecker, function(req,res){
  let userId = req.params.id;
    Message.find({ to : userId }).then((success)=>
      success => res.status(200).json(success)
  );
    //   , (err,messages)=> {
    //   console.log("Mensajes",messages);
    //   return res.status(200).json(messages);
    // });

});


module.exports = messageController;
