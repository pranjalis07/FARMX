const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  role: String,
  companyname: String,
  address1: String,
  address2: String,
  contactnumber: String,
  city: String,
  state: String,
  pincode: String,
  country: String,
  year: String,
  employees: String,
  turnover: String,
  nature: String,
  description: String,
});

module.exports = mongoose.model("Company", userSchema);