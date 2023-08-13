const { Router } = require("express");

const {
  deleteTask,
  updateTask,
  getByEmail,
  getSingleUser,
  saveFarmer,
  saveContractor,
  getFarmers,
  getContractors,
  getFarmer,
  getContractor
} = require("../controllers/Controllers");

const router = Router();

//check available emails in database
router.get("/check-email/:email", getByEmail); 

//get all data of farmers and contractors
router.get("/get-farmers", getFarmers);
router.get("/get-contractors", getContractors);

//get data of single farmer or contractor
router.get("/get-farmer/:email", getFarmer);
router.get("/get-contractor/:email",getContractor );

//Save all data of farmers and contractors
router.post("/farmer/save", saveFarmer);
router.post("/company/save", saveContractor);

router.get("/get/:id", getSingleUser);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);


module.exports = router;