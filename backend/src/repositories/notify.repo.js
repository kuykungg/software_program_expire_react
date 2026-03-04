import db_noti from "../config/db_noti";
import knex from "../../knex";
exports.insert = async (data) =>{
    const result = await knex(Software.table)
        .insert((data))
        .returning("*");
    return result[0];
};