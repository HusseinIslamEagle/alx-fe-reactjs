import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ REQUIRED BY PREVIOUS CHECK
  setRecipes: (recipes) => set({ recipes }),

  // ✅ REQUIRED
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // ✅ REQUIRED BY THIS CHECK
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // ✅ REQUIRED BY THIS CHECK
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== id
      ),
    })),
}));
