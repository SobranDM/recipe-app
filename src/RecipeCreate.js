import React from "react";

function RecipeCreate({addRecipe}) {
  
  function createRecipe(e) {
    e.preventDefault();
    const form = e.target;

    // Construct new recipe object
    const newRecipe = {
      name: form.name.value,
      cuisine: form.cuisine.value,
      photo: form.photo.value,
      ingredients: form.ingredients.value,
      preparation: form.preparation.value
    }

    // Pass new recipe to addRecipe in App.js to update state
    addRecipe(newRecipe);

    // Clear form fields
    document.getElementById('create').reset();
  }

  return (
    <form name="create" id="create" onSubmit={createRecipe}>
      <table>
      {/* Form fields didn't perfectly line up with main table.
          Empty thead and attendant th fixes formatting, while
          CSS hides the thead. */}
        <thead>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td><input name="name" required /></td>
            <td><input name="cuisine" required /></td>
            <td><input name="photo" type="url" /></td>
            <td><textarea name="ingredients" required /></td>
            <td><textarea name="preparation" required /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
