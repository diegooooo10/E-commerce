import type { Cart, Product, ProductCart } from "../models";
import { priceWithDiscount } from "./priceWithDiscount";

interface decrementCartProps {
  productsCart: ProductCart[];
  indexProduct: number;
  product: Product;
}
export const decrementCartQty = ({
  productsCart,
  product,
  indexProduct,
}: decrementCartProps): Cart => {
  const currentProduct = productsCart[indexProduct];
  const newCart: Cart = {
    productsCart: [],
    totalPrice: 0,
    totalPriceWithDiscount: 0,
  };
  if (currentProduct.qty <= 1) {
    newCart.productsCart =
      productsCart.filter(
        (p) => p.product.id !== product.id && p.product.title !== product.title
      ) ?? [];
  } else {
    newCart.productsCart = [...productsCart];
    newCart.productsCart[indexProduct].qty -= 1;
    newCart.productsCart[indexProduct].totalPricePerProduct = Number(
      (newCart.productsCart[indexProduct].qty * product.price).toFixed(2)
    );
    newCart.productsCart[indexProduct].totalPricePerProductWithDiscount =
      Number(
        (
          newCart.productsCart[indexProduct].qty *
          Number(priceWithDiscount(product.discountPercentage, product.price))
        ).toFixed(2)
      );
  }

  newCart.totalPrice = Number(
    newCart.productsCart
      .reduce((acc, curr) => acc + curr.totalPricePerProduct, 0)
      .toFixed(2)
  );
  newCart.totalPriceWithDiscount = Number(
    newCart.productsCart
      .reduce((acc, curr) => acc + curr.totalPricePerProductWithDiscount, 0)
      .toFixed(2)
  );

  return newCart;
};
