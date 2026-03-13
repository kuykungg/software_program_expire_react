const knex = require("../config/db");
const software = require("../models/software.model");
module.exports = {
    createData: async (data) => {
        try {
            const Data = new software({});
                Data.program_name = data.program_name;
                Data.program_vendor = data.program_vendor;
                Data.description = data.description;
                Data.license_key = data.license_key;
                Data.seat_max = data.seat_max;
                Data.seat_using = data.seat_using;
                Data.seat_left = data.seat_max - data.seat_using;
                Data.is_active = data.is_active;
                Data.license_start_at = data.license_start_at;
                Data.license_expire_at = data.license_expire_at;
                const result = await knex("software").insert(Data);
            return result[0];

        } catch (err) {
            throw new Error("Create data failed: " + err.message);
        }
    },
    updateData: async (id, daTa) => {
        try{
            const Data = new software({});
            Data.program_name = daTa.program_name;
            Data.program_vendor = daTa.program_vendor;
            Data.description = daTa.description;
            Data.license_key = daTa.license_key;
            Data.seat_max = daTa.seat_max;
            Data.seat_using = daTa.seat_using;
            Data.seat_left = daTa.seat_max - daTa.seat_using;
            Data.is_active = daTa.is_active;
            Data.license_start_at = daTa.license_start_at;
            Data.license_expire_at = daTa.license_expire_at;
            const result = await knex("software")
                .where("id", id)
                .update(Data)
                .returning("*");
            return result[0];
        } catch (err) {
            throw new Error("Update data failed: " + err.message);
        }
    },
    updatestatus: async ( is_active , id) => {
        try{
            console.log(is_active);
            console.log(id);
            const result = await  knex("software")
                .where("id", id)
                .update({is_active})
                .returning("*");
            return result[0];
        }catch(err){
            throw new Error("Update status failed: " + err.message);
        }

    },
    deleteData: async (id) => {
        try{
            const result = await knex("software").where("id", id).del();
            return { message: "Deleted", id };

        }catch(err){
            throw new Error("Delete data failed: " + err.message);
        }
    },
    getAll: async () => {
        try {
            return await knex("software").select("*");
        } catch (err) {
            throw new Error("Get data failed: " + err.message);
        }
    },

    getById: async (id) => {
        try {
            const result = await knex("software")
                .where({ id })
                .first();

            return result;
        } catch (err) {
            throw new Error("Get data by ID failed: " + err.message);
        }
    }
};