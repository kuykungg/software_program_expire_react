const cron = require("node-cron");
console.log("Cron file loaded");
const NoticronSer = require("../services/NotifyCron.Service")
module.exports =() =>{
    cron.schedule('* * * * *', async ()=>{
        await NoticronSer.fetchData();
    },{
        timezone: 'Asia/Bangkok'
    });
};