import type { Product } from "./Product";

export interface Cart {
  totalPrice: number;
  productsCart: ProductCart[];
  totalPriceWithDiscount: number;
}
export interface ProductCart {
  product: Product;
  qty: number;
  totalPricePerProduct: number;
  totalPricePerProductWithDiscount: number;
}
