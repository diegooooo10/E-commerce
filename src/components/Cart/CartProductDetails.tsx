interface CartProductDetailsProps {
  price: number;
  discountPercentage: number;
  qty: number;
  totalPricePerProduct: number;
  totalPricePerProductWithDiscount: number;
}
export const CartProductDetails = ({
  discountPercentage,
  price,
  qty,
  totalPricePerProductWithDiscount,
  totalPricePerProduct,
}: CartProductDetailsProps) => {
  return (
    <div className="px-4 md:px-0 grid md:grid-cols-4 grid-cols-1 w-full text-sm text-secondary-theme gap-5 justify-items-start md:justify-items-center">
      <div className="flex flex-col md:gap-2 ">
        <span>Unit price</span>
        <div className="flex gap-2">
          <span className="text-primary-theme font-semibold ">
            {`$${price}`}
          </span>
          {discountPercentage > 0 && (
            <span className="text-xs text-green-900 dark:text-green-400 font-medium">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:gap-2 ">
        <span>Quantity</span>
        <span className="font-medium text-primary-theme">{qty}</span>
      </div>

      <div className="flex flex-col md:gap-2 ">
        <span>Subtotal</span>
        <span className="line-through">{`$${totalPricePerProduct}`}</span>
      </div>

      <div className="flex flex-col md:gap-2 ">
        <span>Total</span>
        <span className="font-bold text-primary-theme text-lg">
          ${totalPricePerProductWithDiscount}
        </span>
      </div>
    </div>
  );
};
