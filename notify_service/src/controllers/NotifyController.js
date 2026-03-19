const notifyservice = require("../services/Notify.service");
exports.testapi = (req, res) =>{
    const
        result = notifyservice.testservice();
    res.status(200).send(result);


};
exports.create = async(req,res) =>{
    try{
        console.log(req.body);
        const result = await notifyservice.create(req.body);
        res.status(201).json(result + "1");

    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error);
    }
};
exports.update = async (req, res) => {
    try {
        console.log(req.body);
        const result = await notifyservice.update(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};
exports.delete = async (req, res) => {
    try {
        const result = await notifyservice.delete(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.read = async (req, res) => {
    try {
        const result = await notifyservice.read();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
