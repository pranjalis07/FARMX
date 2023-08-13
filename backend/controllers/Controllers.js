const CompanyModel = require("../models/CompanyModel");
const EmailModel = require("../models/EmailModel");
const UserModel = require("../models/UserModel");


// ---------------------------get all data ------------------------------
module.exports.getFarmers = async (req, res) => {
  const tasks = await UserModel.find();
  res.send(tasks);
};

module.exports.getContractors = async (req, res) => {
  const tasks = await CompanyModel.find();
  res.send(tasks);
};

// ---------------------------get single data ------------------------------
module.exports.getFarmer = async (req, res) => {
  const { email } = req.params;
  try {
    const tasks = await UserModel.find({ "email": email });
    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

module.exports.getContractor = async (req, res) => {
  const { email } = req.params;
  try {
    const tasks = await CompanyModel.find({ "email": email });
    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};


// --------------------------- Save data ------------------------------
module.exports.saveFarmer = async (req, res) => {
  try {
    const { email } = req.body;
    const user = req.body;

    const emailData = await EmailModel.create({ email, role:'farmer' });
    const userData = await UserModel.create(user);

    console.log("Saved Successfully...");
    res.status(201).send({ email: emailData, user: userData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

module.exports.saveContractor = async (req, res) => {
  try {
    const user = req.body;
    const { email } = req.body;

    const userData = await CompanyModel.create(user);
    const emailData = await EmailModel.create({ email, role:'contractor'});

    console.log("Saved Successfully...");
    res.status(201).send({ email: emailData, user: userData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

// ---------------------------Find email ------------------------------
module.exports.getByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const tasks = await EmailModel.find({ "email": email });
    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};


















module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { tasks } = req.body;

  UserModel.findByIdAndUpdate(id, { tasks })
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  UserModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};



module.exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await UserModel.findById(id);
    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};