// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', {
        title,
        ingredients: ingredients.split(','),
        instructions,
      });
      fetchRecipes();
      setTitle('');
      setIngredients('');
      setInstructions('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <h2>Recipes:</h2>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients.join(', ')}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
