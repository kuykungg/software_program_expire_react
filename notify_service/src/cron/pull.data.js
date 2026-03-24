const cron = require("node-cron");
console.log("Cron file loaded");
const NoticronSer = require("../services/NotifyCron.Service")
module.exports =(io) =>{
    cron.schedule('* * * * *', async ()=>{
        await NoticronSer.fetchData(io);
    },{
        timezone: 'Asia/Bangkok'
    });
};