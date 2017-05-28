/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const InversionSchema = new Schema({

  connections: {
    type: String,
    enum:["CTO", "CDO", "Investors", "Developers","Counseling"]
  },
  interests: {
    type: String,
    enum:["technology", "services", "hardware"]
  },
    budget: Number,
    investreturn:{
      type: String,
      enum:["short", "medium", "long"]
    } ,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const StartupData = mongoose.model("Inversion", InversionSchema);
module.exports = InversionSchema;
