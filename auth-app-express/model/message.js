/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const messageSchema = new Schema({
  from: {type: Schema.Types.ObjectId, ref: 'User'},
  to: {type: Schema.Types.ObjectId, ref: 'User'},
  content: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
