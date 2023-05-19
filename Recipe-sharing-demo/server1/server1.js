// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/recipe_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define recipe schema and model
const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: String,
  instructions: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Routes
app.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching recipes' });
    } else {
      res.json(recipes);
    }
  });
});

app.post('/recipes', (req, res) => {
  const { title, ingredients, instructions } = req.body;

  const newRecipe = new Recipe({ title, ingredients, instructions });

  newRecipe.save((err, recipe) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while saving the recipe' });
    } else {
      res.json(recipe);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
