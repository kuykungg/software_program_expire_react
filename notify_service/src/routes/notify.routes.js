const express = require('express');
const router = express.Router();
const notifycontroller = require("../controllers/NotifyController");
router.get("/testapi",notifycontroller.testapi);
module.exports = router;