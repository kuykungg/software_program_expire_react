const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3002;
const http = require("http");
const { Server } = require("socket.io");

const notifyrouter = require('./src/routes/notify.routes')
const runCron = require('./src/cron/pull.data');
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    }
})

io.on("connection", (socket) => {
    console.log("client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("client disconnected:", socket.id);
    });
});
app.set("io", io)
runCron(io);
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use('/apiv1/notify',notifyrouter);
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});