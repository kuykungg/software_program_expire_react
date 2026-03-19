const knex = require('../config/db');
const notify = require ('../models/notify.model')
module.exports ={
    testservice: ()=> {
        console.log("service test");
    },
    create: async (data)=>{
        try{
            const Data = new notify({});
            Data.notify_title = data.notify_title;
            Data.notify_body = data.notify_body;
            Data.notify_date = new Date().toISOString();
            const result = await knex('notify').insert(Data);
            return result[0];

        }catch(err){
            throw new Error("Create data failed: " + err.message);
        }
    },
    update: async (id ,data)=>{
        try{
            const Data = new notify({});
            Data.notify_title = data.notify_title;
            Data.notify_body = data.notify_body;
            Data.notify_date = new Date().toISOString();
            const result = await knex('notify')
                .where("id", id)
                .update(Data)
                .returning("*");
            return result[0];
        }catch(err){
            throw new Error("Update data failed: " + err.message);
        }
    },
    delete: async (id)=>{
        try {
            const result = await knex('notify').where("id", id).del();
            return { message: "Deleted", id };
        }catch(err) {
            throw new Error("Delete data failed: " + err.message);
        }
    },
    read: async ()=>{
        try{
            return await knex('notify').select('*');
        }catch(err){
            throw new Error("read data failed: " + err.message);
        }
    }


}