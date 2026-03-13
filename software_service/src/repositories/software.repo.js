const knex = require("../../knex");
const Software = require("../models/Software");
import softwaredb from "../config/db";

exports.insert = async (data) =>{
    const result = await knex(Software.table)
        .insert((data))
        .returning("*");
    return result[0];
};
