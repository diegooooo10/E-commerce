import { CART_KEY } from "../constants";
import type { Cart, Product, ProductCart } from "../models";
import { priceWithDiscount } from "./priceWithDiscount";
import { saveToLocalstorage } from "./saveToLocalstorage";

interface increaseCartProps {
  product: Product;
  productsCart: ProductCart[];
  qty: number;
}
export const increaseCartQty = ({
  product,
  productsCart,
  qty,
}: increaseCartProps) => {
  const indexProduct = productsCart.findIndex(
    (p) => p.product.id === product.id && p.product.title === product.title
  );
  const copyItems = [...productsCart];
  copyItems[indexProduct].qty += qty;

  copyItems[indexProduct].totalPricePerProduct = Number(
    (
      copyItems[indexProduct].qty * copyItems[indexProduct].product.price
    ).toFixed(2)
  );

  copyItems[indexProduct].totalPricePerProductWithDiscount = Number(
    (
      Number(priceWithDiscount(product.discountPercentage, product.price)) *
      copyItems[indexProduct].qty
    ).toFixed(2)
  );

  const newCart: Cart = {
    productsCart: copyItems,
    totalPrice: Number(
      copyItems
        .reduce((acc, curr) => acc + curr.totalPricePerProduct, 0)
        .toFixed(2)
    ),

    totalPriceWithDiscount: Number(
      copyItems
        .reduce((acc, curr) => acc + curr.totalPricePerProductWithDiscount, 0)
        .toFixed(2)
    ),
  };
  saveToLocalstorage<Cart>(newCart, CART_KEY);
  return newCart;
};
