import { FAVORITE_KEY } from "../constants";
import type { Product } from "../models";
import { getFromLocalstorage } from "./getFromLocalstorage";
import { getFavoriteIndex } from "./getFavoriteIndex";
import { saveToLocalstorage } from "./saveToLocalstorage";

export const addFavorite = (product: Product) => {
  const favorites = getFromLocalstorage<Product[]>(FAVORITE_KEY) ?? [];
  const isFavoriteIndex = getFavoriteIndex(product.id, product.title);
  let newFavorites: Product[] = [];
  
  if (isFavoriteIndex !== -1) {
    favorites.splice(isFavoriteIndex, 1);
    newFavorites = [...favorites];
  } else {
    newFavorites = [...favorites, product];
  }

  saveToLocalstorage<Product[]>(newFavorites, FAVORITE_KEY);
  return newFavorites;
};
