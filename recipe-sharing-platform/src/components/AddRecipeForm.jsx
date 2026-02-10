import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    const ingredientsList = ingredients.split(",").filter(Boolean);
    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients");
      return;
    }

    // Clear error if validation passes
    setError("");

    // For now we just reset the form
    setTitle("");
    setIngredients("");
    setSteps("");

    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        {error && (
          <p className="text-red-500 mb-4 text-sm">
            {error}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2 h-24 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. eggs, milk, flour"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 h-28 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-blue-500
            text-white
            py-2
            rounded
            hover:bg-blue-600
            transition
            duration-300
          "
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
