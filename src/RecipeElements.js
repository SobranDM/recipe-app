import React from "react";

function RecipeElements({recipes, deleteRecipe}) {
    
    function onDelete(e) {
        const doomedRecipe = e.target.parentElement.parentElement.getAttribute('index');
        const filtered = recipes.filter((recipe, index) =>
        index != doomedRecipe
        );
        deleteRecipe(filtered);
        console.log(filtered);
    }

    return (
        <tbody>
        {recipes.map((recipe, index) => (
            <tr key={index} index={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt={recipe.name} /></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td><button name="delete" onClick={onDelete}>Delete</button></td>
        </tr>
        ))}
        </tbody>
    )
}

export default RecipeElements;