const knex = require("../../knex");
const Software = require("../models/software");
import softwaredb from "../config/db";

exports.insert = async (data) =>{
    const result = await knex(Software.table)
        .insert((data))
        .returning("*");
    return result[0];
};
