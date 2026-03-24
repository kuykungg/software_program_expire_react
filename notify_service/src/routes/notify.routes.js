const express = require('express');
const router = express.Router();
const notifycontroller = require("../controllers/NotifyController");
router.get("/testapi",notifycontroller.testapi);
router.get("/read",notifycontroller.read);
router.post("/create",notifycontroller.create);
router.put("/update/:id",notifycontroller.update);
router.delete("/delete/:id",notifycontroller.delete)

module.exports = router;