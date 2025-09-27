import React from "react";
import { useCartStore } from "../../store";
import { CardProductCart } from "./CardProductCart";
import { CheckoutSummary } from "./CheckoutSummary";
import { IconCart } from "../Icons";

export const Cart = React.memo(() => {
  const cart = useCartStore((state) => state.cart);
  return (
    <article
      className={`${
        cart.productsCart.length === 0
          ? " flex-row justify-center items-center min-h-[calc(100dvh-4.5rem)]"
          : "flex-col md:card m-4 "
      } will-change-[background-color] max-w-3xl gap-5 md:mx-auto flex`}
    >
      {cart.productsCart.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-5 w-full text-primary-theme">
          <IconCart size={50} />
          <p className="text-xl text-center">
            Your cart is empty. Add some products to get started.
          </p>
        </div>
      )}
      {cart.productsCart.map((cartProduct) => (
        <CardProductCart
          cartProduct={cartProduct}
          key={cartProduct.product.id}
        />
      ))}
      {cart.productsCart.length > 0 && (
        <CheckoutSummary
          totalPrice={cart.totalPrice}
          totalPriceWithDiscount={cart.totalPriceWithDiscount}
        />
      )}
    </article>
  );
});
