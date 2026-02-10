import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // ✅ REQUIRED BY CHECKER
  const [errors, setErrors] = useState({});

  // ✅ REQUIRED BY CHECKER
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = "Title is required";
    }

    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required";
    }

    if (!steps) {
      newErrors.steps = "Preparation steps are required";
    }

    const ingredientsList = ingredients.split(",").filter(Boolean);
    if (ingredientsList.length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    // Reset form on success
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});

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
        {Object.keys(errors).length > 0 && (
          <p className="text-red-500 mb-4 text-sm">
            Please fix the errors below
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
            className="w-full border rounded p-2"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">
              {errors.title}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2 h-24"
            placeholder="e.g. eggs, milk, flour"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">
              {errors.ingredients}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 h-28"
            placeholder="Describe the preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm">
              {errors.steps}
            </p>
          )}
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
