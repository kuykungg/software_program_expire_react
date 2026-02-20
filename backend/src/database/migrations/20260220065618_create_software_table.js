/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('software',function(table){
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('program_name').notNullable();
        table.string("program_vendor").notNullable();
        table.string("description");
        table.string('license_key');
        table.integer('seat_max');
        table.integer('seat_using').notNullable();
        table.integer('seat_left').notNullable();
        table.boolean('is_active').defaultTo(true);
        table.date('license_start_at').notNullable();
        table.date('license_expire_at').notNullable();

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
