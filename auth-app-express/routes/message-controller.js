/*jshint esversion: 6*/
const express = require("express");
const messageController = express.Router();
const passport = require("passport");
const authChecker = require("../authCheckerMiddleware");


const User = require("../model/user");
const Message = require("../model/message");

messageController.post(`/message/new`,authChecker, (req, res, next) => {
        const {from,to,content} = req.body;
        var newMessage = Message({from,to,content});
        newMessage.save()
          .then((message)=>res.status(200).json(message))
          .catch(err => res.status(400).json({
              message: "Something went wrong"
          }));
});

messageController.get("/messages/:id", authChecker, function(req, res) {
    let userId = req.params.id;
    Message.find({
        to: userId
    })
    .then((messages) => res.status(200).json(messages))
    .catch(err => res.status(500).json(err));
});
messageController.get("/inbox/:id", authChecker, function(req, res) {
    let userId = req.params.id;
    Message.find({
        to: userId
    }).populate('from').then(messages => {
      return res.status(200).json(messages);
    })
    .catch(err => res.status(500).json(err));
});
messageController.get("/delete-message/:id", authChecker, function(req, res) {
    let messageId = req.params.id;
    Message.deleteOne({
        _id : messageId
    }).then(message => {
      return res.status(200).json(message);
    })
    .catch(err => res.status(500).json(err));
});


module.exports = messageController;
