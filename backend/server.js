const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3001;
app.use(cors());
app.use(express.json());
const softwareRoutes = require('./src/routes/software.route');
app.use('/api/software',softwareRoutes);
app.get("/hello", (req, res) => {
   res.json({messge:"API work"});
});
app.listen(PORT,() => console.log("Server started on port 3000"));