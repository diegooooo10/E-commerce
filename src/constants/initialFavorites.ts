import type { Product } from "../models";
import { getFromLocalstorage } from "../utils";
import { FAVORITE_KEY } from "./localStorageKeys";

export const initialFavorites =
  getFromLocalstorage<Product[]>(FAVORITE_KEY) ?? [];
