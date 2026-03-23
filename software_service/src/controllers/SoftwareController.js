const softwareService = require("../services/SoftwareService");
exports.createData = async(req,res) =>{
    try{
        const result = await softwareService.createData(req.body);
        res.status(201).json(result + "1");

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
exports.updateData = async (req, res) => {
    try {
        const result = await softwareService.updateData(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatestatus = async (req, res) => {
  try{
      const { is_active } = req.body;
      if(typeof is_active !== "boolean"){

           res.status(400).json({error: "Invalid active status"});
      }
      const result = await softwareService.updatestatus(is_active, req.params.id);
      res.status(200).json(result);
  }  catch(error){
      res.status(500).json({ error: error.message });
  }
};
exports.updateusingseat = async (req, res) => {
    try{
        const {seat_using} = req.body;
        const result = await softwareService.updateseatusing(seat_using, req.params.id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

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
exports.rest = async (req, res) => {
    res.json("connect passed");

};

