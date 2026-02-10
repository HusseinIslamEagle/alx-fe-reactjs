import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {recipe.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {recipe.summary}
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          Cooking Instructions
        </h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
