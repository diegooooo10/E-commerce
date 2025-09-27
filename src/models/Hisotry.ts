import type { Cart } from "./Cart";

export interface History {
  cart: Cart;
  date: Date;
  id: string;
}
