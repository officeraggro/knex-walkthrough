/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE pet_type CASCADE");
  await knex('food_type').del()
  await knex("food_type").insert([
    {
      name: "Barftastic",
      description:
        "A putrid smelling melange of vomit, toenail clippings, and wet hair",
    },
    { name: "Nummy FluffBonkies", description: "Some crap that cats like" },
    {
      name: "BlubBlub",
      description: "Fish flakes made from the fines styrofoam",
    },
    { name: "Rats", description: "Just some rats" },
    { name: "Human Flesh", description: "Good eatin' for your feathered friend" },
  ]);
};
