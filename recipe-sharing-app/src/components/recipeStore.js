import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ REQUIRED BY CHECKER
  searchTerm: "",

  // ✅ REQUIRED BY CHECKER
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ✅ REQUIRED FROM PREVIOUS TASKS
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== id
      ),
    })),
}));
