const knex = require("../../knex");
const Software = require("../models/Software");
exports.insert = async (data) =>{
    const result = await knex(Software.table)
        .insert((data))
        .returning("*");
    return result[0];
};