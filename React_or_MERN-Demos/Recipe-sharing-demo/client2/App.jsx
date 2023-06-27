// npx create-react-app frontend
// cd frontend
// npm install axios react-router-dom
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
  <div>
    <h3>{props.recipe.title}</h3>
    <p>{props.recipe.description}</p>
    <p>{props.recipe.ingredients}</p>
    <p>{props.recipe.instructions}</p>
  </div>
);

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const recipeList = () => {
    return recipes.map(currentRecipe => {
      return <Recipe recipe={currentRecipe} key={currentRecipe._id} />;
    });
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipeList()}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Recipe App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Recipes</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Add Recipe</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={RecipeList} />
      </div>
    </Router>
  );
};

export default App;

// npm start
