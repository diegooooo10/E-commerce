import { NavLink } from "react-router-dom";
import { ImageLazy } from "../Common";
import type { ProductCart } from "../../models";

interface ItemHistoryDescriptionProps {
  productsCart: ProductCart[];
}
export const ItemHistoryDescription = ({
  productsCart,
}: ItemHistoryDescriptionProps) => {
  return (
    <div className="mb-4">
      {productsCart.map((productCart) => (
        <div
          key={productCart.product.id}
          className="flex flex-col md:flex-row justify-between items-center gap-5 p-4 border-b border-border dark:border-border-dark"
        >
          <div className="flex gap-2 w-full flex-col md:flex-row">
            <ImageLazy
              alt={`Image of ${productCart.product.title}`}
              src={productCart.product.thumbnail}
              className="md:w-24 w-full h-24 md:object-cover object-contain bg-background rounded"
              height={96}
              width={96}
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-primary-theme">
                {productCart.product.title}
              </h2>
              <p className="text-sm text-secondary-theme">
                Quantity: <span className="font-medium">{productCart.qty}</span>
              </p>
              <p className="text-sm text-secondary-theme">
                Price:{" "}
                <span className="font-medium">
                  ${productCart.totalPricePerProductWithDiscount.toFixed(2)}
                </span>
              </p>
              {productCart.product.discountPercentage && (
                <p className="text-sm text-green-900 dark:text-green-400">
                  Discount Applied:{" "}
                  <span>{productCart.product.discountPercentage}%</span>
                </p>
              )}
            </div>
          </div>

          <NavLink to={`/private/product/${productCart.product.id}`} className={'md:w-60 w-full'}>
            <button className="accent-component px-2 py-1 text-sm  ">
              View Details Product
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
