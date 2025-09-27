import { create } from "zustand";
import type { FavoriteStructure } from "../../types";
import { addFavorite } from "../../utils";
import type { Product } from "../../models";
import { initialFavorites } from "../../constants";

export const useFavoritesStore = create<FavoriteStructure>((set) => ({
  favorites: initialFavorites,
  
  updateFavorites: (product: Product) => {
    const newFavorites = addFavorite(product);
    return set(() => ({
      favorites: newFavorites,
    }));
  },
}));
