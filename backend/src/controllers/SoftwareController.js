const softwareService = require("../services/SoftwareService");
exports.createData = async(req,res) =>{
    try{
        console.log(req.body);
        const result = await softwareService.createData(req.body);
        res.status(201).json(result + "1");

    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error);
        console.log("Connected to database:", process.env.DB_NAME);
    }
};