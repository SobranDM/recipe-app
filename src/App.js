import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  // useState to insert new recipe into array
  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  // useState to filter out selected recipe
  function deleteRecipe(filtered) {
    setRecipes(filtered);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate recipes = {recipes} addRecipe = {addRecipe} />
    </div>
  );
}

export default App;
