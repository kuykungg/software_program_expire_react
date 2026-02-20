const softwareService = require("../services/SoftwareService");
exports.createData = async(req,res) =>{
    try{
        const result = await softwareService.createData(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};