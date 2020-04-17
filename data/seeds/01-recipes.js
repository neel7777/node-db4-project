exports.seed = function(knex) { 
       
            return knex('recipes').insert([
                { id: 1, recipe_name : 'recipe1'},
                { id: 2, recipe_name : 'recipe2'},
                { id: 3, recipe_name : 'recipe3'}
            ])
        
    
    
}