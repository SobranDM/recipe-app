import React from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  function createRecipe(e) {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const newRecipe = {
      name: form.name.value,
      cuisine: form.cuisine.value,
      photo: form.photo.value,
      ingredients: form.ingredients.value,
      preparation: form.preparation.value
    }
    addRecipe(newRecipe);
    document.getElementById('create').reset();
  }

  return (
    <form name="create" id="create" onSubmit={createRecipe}>
      <table>
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
