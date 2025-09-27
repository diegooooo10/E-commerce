import { useModalsStore } from "../../store";
interface CheckoutSummaryProps {
  totalPrice: number;
  totalPriceWithDiscount: number;
}
export const CheckoutSummary = ({
  totalPrice,
  totalPriceWithDiscount,
}: CheckoutSummaryProps) => {
  const setModal = useModalsStore((state) => state.setModal);

  return (
    <div className="col-span-full w-full flex flex-col gap-5 px-5 pb-5">
      <div className="flex justify-between items-center md:max-w-1/2 mx-auto w-full">
        <div className="text-center text-secondary-theme">
          <p className="text-sm">Original price</p>
          <p className="line-through ">{`$${totalPrice}`}</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-secondary-theme">Total</p>
          <p className="text-xl font-bold text-primary-theme">
            {`$${totalPriceWithDiscount}`}
          </p>
          <p className="text-xs text-green-900 dark:text-green-400 font-medium">
            Discount applied
          </p>
        </div>
      </div>
      <button
        onClick={() => setModal("checkout")}
        className="accent-component h-12"
      >
        Buy now
      </button>
    </div>
  );
};
