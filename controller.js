const knex = require("knex")(
  require("./knexfile")[process.env.NODE_ENV || "development"]
);


const getPetNamesAndTypes = () => {
    return knex('pet').join('pet_type', 'pet_type.id', '=', 'pet.pet_type_id').join('food_type', 'food_type.id', '=', 'pet.food_type_id').select('pet.id', 'pet.name AS name', 'pet_type.name AS type', 'food_type.name AS food', 'food_type.description')
}

module.exports = { getPetNamesAndTypes }