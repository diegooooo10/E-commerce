import type { ProductCart } from "../../models";
import { CartProductDetails } from "./CartProductDetails";
import { CartProductControls } from "./CartProductControls";
import { ImageProductCart } from "./ImageProductCart";

interface CardProductCartProps {
  cartProduct: ProductCart;
}
export const CardProductCart = ({ cartProduct }: CardProductCartProps) => {
  const product = cartProduct.product;
  return (
    <section className="w-full max-w-5xl border-b border-border dark:border-border-dark mx-auto flex flex-col md:flex-row gap-5 md:p-4 max-sm:card">
      <ImageProductCart
        id={product.id}
        thumbnail={product.thumbnail}
        title={product.title}
      />
      <aside className="flex flex-col gap-5 w-full p-4 md:p-0">
        <h1 className="text-lg font-semibold text-primary-theme">
          {product.title}
        </h1>
        <div className="flex flex-col md:flex-row md:gap-5 gap-2">
          <CartProductDetails
            discountPercentage={product.discountPercentage}
            price={product.price}
            qty={cartProduct.qty}
            totalPricePerProduct={cartProduct.totalPricePerProduct}
            totalPricePerProductWithDiscount={
              cartProduct.totalPricePerProductWithDiscount
            }
          />
        </div>
      </aside>
      <CartProductControls product={product} />
    </section>
  );
};
