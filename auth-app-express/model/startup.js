/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const startupSchema = new Schema({
  username: String,
  password: String,
  category: {
    type: String,
    enum:["technology", "services", "hardware"]
  },
  budget: Number
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Startup = mongoose.model("Startup", startupSchema);
module.exports = Startup;
