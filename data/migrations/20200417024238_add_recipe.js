
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl=>{
        tbl.increments()
        tbl.string('recipe_name', 255).notNullable().unique();
    })
    .createTable('ingredients', tbl=>{
        tbl.increments();
        tbl.string('ingredient_name', 255).notNullable().unique();
        tbl.integer('quantity').notNullable();
    })
};

    
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
