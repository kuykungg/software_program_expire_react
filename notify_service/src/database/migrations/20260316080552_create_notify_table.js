/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notify', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('notify_title').notNullable();
        table.string('notify_body');
        table.date('notify_date');
        table.uuid('software_id').nullable();

    });

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('notify');
};
