import type { Product } from "../models";

export type FavoriteStructure = {
  favorites: Product[];
  updateFavorites: (product: Product) => void;
};
