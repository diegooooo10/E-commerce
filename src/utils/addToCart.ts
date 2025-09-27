import type { Cart, Product, ProductCart } from "../models";
import { priceWithDiscount } from "./priceWithDiscount";

interface addToCartProps {
  productsCart: ProductCart[];
  product: Product;
  qty: number;
  totalPrice: number;
  totalPriceWithDiscount: number;
}
export const addToCart = ({
  product,
  productsCart,
  qty,
  totalPrice,
  totalPriceWithDiscount,
}: addToCartProps) => {
  const newCart: Cart = {
    productsCart: [
      ...productsCart,
      {
        product,
        qty,
        totalPricePerProduct: Number((product.price * qty).toFixed(2)),
        totalPricePerProductWithDiscount:
          Number(priceWithDiscount(product.discountPercentage, product.price)) *
          qty,
      },
    ],
    totalPrice: Number((totalPrice + product.price * qty).toFixed(2)),
    totalPriceWithDiscount:
      Number(
        (
          totalPriceWithDiscount +
          Number(priceWithDiscount(product.discountPercentage, product.price))
        ).toFixed(2)
      ) * qty,
  };

  return newCart;
};
