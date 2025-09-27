import type { Cart } from "../models";
import { getFromLocalstorage } from "../utils";
import { CART_KEY } from "./localStorageKeys";

export const initialCart = getFromLocalstorage<Cart>(CART_KEY) ?? {
  totalPrice: 0,
  totalPriceWithDiscount: 0,
  productsCart: [],
};
