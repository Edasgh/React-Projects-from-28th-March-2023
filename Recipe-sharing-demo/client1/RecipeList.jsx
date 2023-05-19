// RecipeList.js
import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
