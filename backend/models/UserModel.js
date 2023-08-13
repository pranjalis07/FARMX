const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  role: String,
  firstname: String,
  lastname: String,
  address1: String,
  address2: String,
  contactnumber: String,
  city: String,
  state: String,
  pincode: String,
  country: String,
  farmname: String,
  farmlocation: String,
  farmsize: String,
  farmtype: String,
  croptype: String,
  soiltype: String,
  irrigationtype: String,
  pesticidesused: String,
  quantity: String,
  description: String,
  profileImg: String,
  bannerImg: String,
  tasks: [{ type: String }],
});

module.exports = mongoose.model("Users", userSchema);