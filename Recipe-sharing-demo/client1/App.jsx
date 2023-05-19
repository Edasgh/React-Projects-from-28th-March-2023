// App.js
import React, { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const addRecipe = (recipe) => {
    fetch('http://localhost:5000/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then((response) => response.json())
      .then((data) => setRecipes([...recipes, data]))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <RecipeForm onSubmit={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
