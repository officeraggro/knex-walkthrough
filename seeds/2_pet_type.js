/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE pet_type CASCADE");
  await knex('pet_type').del()
  await knex("pet_type").insert([
    { name: "Bird" },
    { name: "Cat" },
    { name: "Dog" },
    { name: "Python" },
    { name: "Fish" },
  ]);
};
