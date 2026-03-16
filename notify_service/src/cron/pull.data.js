const cron = require("node-cron");
const NoticronSer = require("../services/NotifyCron.Service")
module.exports =() =>{
    cron.schedule('0 0 * * *', async ()=>{
        await NoticronSer.fetchData();
    },{
        timezone: 'Asia/Bangkok'
    });
};