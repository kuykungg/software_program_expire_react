const express = require('express')
const router = express.Router();
const SoftwareController = require("../controllers/SoftwareController")
router.get('/',(req, res) =>{
    res.json({messge:"API work"});
});
router.post("/create",SoftwareController.createData);
module.exports = router;