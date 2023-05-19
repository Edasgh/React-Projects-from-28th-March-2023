const router = require('express').Router();
let Recipe = require('../models/recipe.model');

// Get all recipes
router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new recipe
router.route('/add').post((req, res) => {
  const { title, description, ingredients, instructions } = req.body;

  const newRecipe = new Recipe({ title, description, ingredients, instructions });

  newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
