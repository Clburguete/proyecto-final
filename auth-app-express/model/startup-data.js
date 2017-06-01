/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const StartupDataSchema = new Schema({


  category: {
    type: String,
    enum:["technology", "services", "hardware"]
  },
    lookingfor: {
      type:String,
      enum: ["CTO", "CDO", "Investors", "Developers","Counseling"]
    },
    investinterest:{
      type: String,
      enum:["short", "medium", "long"]
    },
    budget: Number,
    lastrevenue:[Number],
    expectedrevenue:[Number]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const StartupData = mongoose.model("startupdata", StartupDataSchema);
module.exports = StartupData;
