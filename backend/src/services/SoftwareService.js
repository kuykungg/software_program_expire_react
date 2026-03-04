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
    }
};