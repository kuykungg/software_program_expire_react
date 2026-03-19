const axios = require('axios');
const knex = require("../config/db")
const notify = require("../models/notify.model");
const dayjs = require("dayjs");
dayjs.extend(require("dayjs/plugin/duration"));
module.exports = {
    async fetchData(){
        try{
            const response = await axios.get("http://localhost:3001/apiv1/software/getData")
            console.log(JSON.stringify(response.data,null, 2));
            const data = response.data;
            for(const item of data){
                const diffday = dayjs(item.license_expire_at).diff(dayjs(),"day")
                if (diffday <= 7){
                    const Data = new notify({})
                    Data.notify_title = item.program_name + " will expire"
                    Data.notify_body = item.program_name + "from" + item.program_vendor + " will expire" + "in "+diffday
                    Data.notify_date = new Date().toISOString();
                }
            }


        }catch(error){
            console.error("Error pulling API:", error);
        }

    }
}