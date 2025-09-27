import { FAVORITE_KEY } from "../constants";
import type { Product } from "../models";
import { getFromLocalstorage } from "./getFromLocalstorage";

export const getFavoriteIndex = (id: number, title: string) => {
  const favorites = getFromLocalstorage<Product[]>(FAVORITE_KEY) ?? [];
  return favorites.findIndex(
    (favorite) => favorite.id === id && favorite.title === title
  );
};
