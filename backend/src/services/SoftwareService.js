const knex = require("../config/db");

module.exports = {
    createData: async (data) => {
        try {
            const result = await knex("software")
                .insert(data)
                .returning("*");

            return result[0];

        } catch (err) {
            throw new Error("Create data failed: " + err.message);
        }
    },
    updateData: async (id, data) => {
        try{
            const result = await knex("software")
                .where("id", id)
                .update(data)
                .returning("*");
            return result[0];
        } catch (err) {
            throw new Error("Update data failed: " + err.message);
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