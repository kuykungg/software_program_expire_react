const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3002;
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));