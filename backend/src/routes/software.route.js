const express = require('express')
const router = express.Router();
router.get('/',(req, res) =>{
    res.json({messge:"API work"});
});
module.exports = router;