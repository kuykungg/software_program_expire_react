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
exports.updateData = async (req, res) => {
    try {
        console.log(req.body);
        const result = await softwareService.updateData(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};
exports.updatestatus = async (req, res) => {
  try{
      const { is_active } = req.body;
      if(typeof is_active !== "boolean"){
          return res.status(400).json({error: "Invalid active status"});
      }
      const result = await softwareService.updatestatus(is_active, req.params.id);
      res.status(200).json(result);
  }  catch(error){
      res.status(500).json({ error: error.message });
  }
};
exports.deleteData = async (req, res) => {
    try {
        const result = await softwareService.deleteData(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getdata = async (req, res) => {
    try {
        const result = await softwareService.getAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getdatabyid = async (req, res) => {
    try {
        const result = await softwareService.getById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};