const db = require("../config/db");
const pool = require("../config/db");
const Software = require("../models/software.model");

async function createSoftware(){
    exports.createData = async (data) => {
        const result = await knex(Software.table)
            .insert(data)
            .returning("*");

        return result[data];
    };

}