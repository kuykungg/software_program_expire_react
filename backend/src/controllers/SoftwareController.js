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
exports.updateData = async(req,res) =>{
    try{
        console.log(req.body);
        const result = await softwareService.updateData(req.body);
        res.status(201).json(result + "1");

    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error);
        console.log("Connected to database:", process.env.DB_NAME);
    }
};
exports.deleteData = async(req,res) =>{
    try{
        console.log(req.body);
        const result = await softwareService.deleteData(req.body);
        res.status(201).json(result + "1");

    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error);
        console.log("Connected to database:", process.env.DB_NAME);
    }
};
exports.getdata = async (req, res) => {
    try {
        const result = await SoftwareService.getAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getdatabyid = async (req, res) => {
    try {
        const result = await SoftwareService.getById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};