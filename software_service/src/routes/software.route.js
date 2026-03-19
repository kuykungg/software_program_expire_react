const express = require('express')
const router = express.Router();
const SoftwareController = require("../controllers/SoftwareController")
router.get('/',(req, res) =>{
    res.json({messge:"API work"});
});
router.post("/create",SoftwareController.createData);
router.put("/update/:id",SoftwareController.updateData);
router.patch("/updatestatus/:id",SoftwareController.updatestatus);
router.delete("/delete/:id",SoftwareController.deleteData);
router.get("/getdata",SoftwareController.getdata);
router.get("/getdatabyid/:id",SoftwareController.getdatabyid);
router.get("/rest",SoftwareController.rest)
module.exports = router;