/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pet', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('pet_type_id').references('id').inTable('pet_type').onDelete('cascade');
        table.integer('food_type_id').references('id').inTable('food_type').onDelete('cascade');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pet', table => {
        table.dropForeign('pet_type_id')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('pet');
    });
  
};
