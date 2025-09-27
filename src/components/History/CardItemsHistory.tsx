import { useState } from "react";
import type { History } from "../../models";
import { IconChevronDown } from "../Icons";
import { useHistoryStore } from "../../store";
import { convertDate } from "../../utils";
import { ItemHistoryDescription } from "./ItemHistoryDescription";

interface CardItemsHistoryProps {
  item: History;
}
export const CardItemsHistory = ({ item }: CardItemsHistoryProps) => {
  const [viewMore, setViewMore] = useState<boolean>(false);
  const removeItemFromHistory = useHistoryStore(
    (state) => state.removeHistoryItem
  );
  return (
    <section
      className={`rounded-md card p-4 relative ${
        viewMore ? "max-h-none" : " md:max-h-96 max-h-dvh"
      } overflow-hidden`}
    >
      <div className="flex justify-between md:items-center flex-col md:flex-row">
        <h1 className="text-lg font-bold text-primary-theme">{`#${item.id}`}</h1>
        <p className="text-sm text-secondary-theme">{convertDate(item.date)}</p>
      </div>
      <ItemHistoryDescription productsCart={item.cart.productsCart} />
      <div className=" flex flex-col md:flex-row justify-between items-center md:px-4 gap-2 md:gap-0">
        <button
          className=" cursor-pointer text-text-dark outline font-semibold outline-red-500 rounded-md py-1 px-2 bg-red-primary text-sm hover:bg-red-700 transition-theme md:order-1 order-2 w-full md:w-auto"
          onClick={() => removeItemFromHistory(item.id)}
        >
          Remove from History
        </button>
        <p className="text-lg font-bold text-primary-theme order-1 md:order-2 text-center">
          Total: ${item.cart.totalPriceWithDiscount}
        </p>
      </div>
      {!viewMore && item.cart.productsCart.length > 2 && (
        <button
          className="absolute bottom-0 left-0 w-full cursor-pointer items-center h-14 bg-linear-to-b to-background dark:to-background-dark from-background/80 dark:from-background-dark/80 justify-center flex"
          onClick={() => setViewMore((prev) => !prev)}
          aria-label="view more history"
        >
          <IconChevronDown size={28} />
        </button>
      )}
    </section>
  );
};
