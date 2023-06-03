// RecipeForm.js
import React, { useState } from 'react';

const RecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, ingredients, instructions });
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Recipe</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>
      <label htmlFor="instructions">Instructions:</label>
      <textarea
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
