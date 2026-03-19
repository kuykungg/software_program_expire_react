const knex = require("../../knex");
const notify = require("../models/notify");
import notifydb from "../config/db";

exports.insert = async (data) =>{
    const result = await knex(notify.table)
        .insert((data))
        .returning("*");
    return result[0];
};
