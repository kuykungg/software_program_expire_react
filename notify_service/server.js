const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3002;
const notifyrouter = require('./src/routes/notify.routes')
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use('/apiv1/notify',notifyrouter);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));