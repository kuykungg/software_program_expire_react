const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
//
const app = express();
const PORT = 3002;
//
const server = http.createServer(app);
//
const notifyrouter = require('./src/routes/notify.routes')
const runCron = require('./src/cron/pull.data');
//
// 👇 create socket.io server
const io = new Server(server, {
    cors: {
        origin: "*", // for dev, later restrict
    }
});

// 👇 handle connection
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

//
runCron(io);
app.set("io", io);
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use('/apiv1/notify',notifyrouter);
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));