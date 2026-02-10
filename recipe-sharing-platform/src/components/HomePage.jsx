import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // load data.json
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="
              bg-white
              rounded-lg
              shadow-md
              hover:shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
