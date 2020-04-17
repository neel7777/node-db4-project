const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe=>{
        res.json(recipe)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding recipes'})
    })
});

router.get('/:id/shoppingList', (req, res)=>{
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(list=>{
        res.json(list)
    })
    .catch(error=>{
        res.status(500).json({ message: 'error finding list'})
    })
})
module.exports = router;