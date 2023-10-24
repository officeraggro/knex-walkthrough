/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex("pet").insert([
    { name: "Fluffy", pet_type_id: 2, food_type_id: 2},
    { name: "Killer", pet_type_id: 1, food_type_id: 5},
    { name: "Nemo", pet_type_id: 5, food_type_id: 3},
    { name: "Nagini", pet_type_id: 4, food_type_id: 4},
    { name: "Whiskers", pet_type_id: 2, food_type_id: 2},
    { name: "Pongo", pet_type_id: 3, food_type_id: 1},
    { name: "Susie", pet_type_id: 4, food_type_id: 4},
    { name: "Wilfred", pet_type_id: 3, food_type_id: 1},
    { name: "Jasper", pet_type_id: 5, food_type_id: 3}
  ]);
};
