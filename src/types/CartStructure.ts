import type { Cart, Product } from "../models";

export type CartStructure = {
  cart: Cart;
  buy: () => void;
  removeProduct: (product: Product) => void;
  increaseQty: (product: Product, qty?: number) => void;
  decrementQty: (product: Product) => void;
  updateCart: (product: Product, qty?: number) => void;
};
