const notifyservice = require("../services/Notify.service");
exports.testapi = (req, res) =>{
    const
        result = notifyservice.testservice();
    res.status(200).send(result);


    }