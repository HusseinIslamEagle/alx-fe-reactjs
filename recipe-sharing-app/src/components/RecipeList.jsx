import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore(
    (state) => state.removeFavorite
  );

  const toggleFavorite = (id) => {
    favorites.includes(id)
      ? removeFavorite(id)
      : addFavorite(id);
  };

  return (
    <div>
      <h2>Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id)
              ? "Remove Favorite"
              : "Add Favorite"}
          </button>

          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
