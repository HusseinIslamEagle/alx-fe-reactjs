import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ REQUIRED BY CHECKER
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
}));
