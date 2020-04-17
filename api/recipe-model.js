const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes () {
    return db('recipes');

}

function getShoppingList (recipe_id) {
    return db('ingredients as i')
    .select('i.ingredient_name', 'ri.quantity')
    .join('recipe_ingredients as ri', 'ri.ingredient_id', '=', 'i_id')
    .where({'ri.recipe_id': recipe_id})
    

}

function getInstructions (recipe_id) {

}