/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ["startup", "investor"],
  },
  inv_datasheets: {type: Schema.Types.ObjectId, ref: 'inversion'},
  start_datasheets: {type: Schema.Types.ObjectId, ref: 'startupdata'},
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
