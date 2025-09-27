import { create } from "zustand";
import type { CartStructure } from "../../types";
import { CART_KEY, initialCart } from "../../constants";
import type { Cart, Product } from "../../models";
import {
  addToCart,
  decrementCartQty,
  increaseCartQty,
  saveToLocalstorage,
} from "../../utils";

export const useCartStore = create<CartStructure>((set, get) => ({
  cart: initialCart,
  buy: () => {
    set(() => ({
      cart: { productsCart: [], totalPrice: 0, totalPriceWithDiscount: 0 },
    }));
    localStorage.removeItem(CART_KEY);
  },

  decrementQty: (product: Product) => {
    const cart = get().cart;
    const indexProduct = cart.productsCart.findIndex(
      (p) => p.product.id === product.id && p.product.title === product.title
    );
    if (indexProduct === -1) return cart;

    const newCart = decrementCartQty({
      productsCart: cart.productsCart,
      indexProduct,
      product,
    });
    saveToLocalstorage<Cart>(newCart, CART_KEY);
    return set(() => ({ cart: newCart }));
  },

  increaseQty: (product: Product, qty = 1) => {
    const { productsCart } = get().cart;
    const newCart = increaseCartQty({ product, productsCart, qty });

    saveToLocalstorage<Cart>(newCart, CART_KEY);
    return set(() => ({ cart: newCart }));
  },

  removeProduct: (product: Product) => {
    const { productsCart } = get().cart;
    const finalProducts = productsCart.filter(
      (p) => p.product.id !== product.id && p.product.title !== product.title
    );

    const finalPrice = Number(
      finalProducts
        .reduce((acc, curr) => acc + curr.totalPricePerProduct, 0)
        .toFixed(2)
    );
    const finalPriceWithDiscount = Number(
      finalProducts
        .reduce((acc, curr) => acc + curr.totalPricePerProductWithDiscount, 0)
        .toFixed(2)
    );
    const copyCart: Cart = {
      productsCart: finalProducts,
      totalPrice: finalPrice,
      totalPriceWithDiscount: finalPriceWithDiscount,
    };
    saveToLocalstorage<Cart>(copyCart, CART_KEY);

    return set(() => ({ cart: copyCart }));
  },

  updateCart: (product: Product, qty = 1) => {
    const { productsCart, totalPrice, totalPriceWithDiscount } = get().cart;
    const indexProduct = productsCart.findIndex(
      (p) => p.product.id === product.id && p.product.title === product.title
    );

    if (indexProduct === -1) {
      const newCart = addToCart({
        product,
        productsCart,
        qty,
        totalPrice,
        totalPriceWithDiscount,
      });
      saveToLocalstorage<Cart>(newCart, CART_KEY);
      return set(() => ({ cart: newCart }));
    } else {
      get().increaseQty(product, qty);
    }
  },
}));
