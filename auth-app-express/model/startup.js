/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const startupSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Startup = mongoose.model("Startup", startupSchema);
module.exports = Startup;
