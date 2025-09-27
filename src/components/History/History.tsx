import { useHistoryStore } from "../../store";
import { IconHistory } from "../Icons";
import { CardItemsHistory } from "./CardItemsHistory";

export const History = () => {
  const history = useHistoryStore((state) => state.history);
  return (
    <article
      className={`${
        history.length === 0
          ? " flex-row justify-center items-center min-h-[calc(100dvh-4.5rem)]"
          : "flex-col gap-5 my-4"
      } will-change-[background-color] md:px-0 px-4 max-w-3xl mx-auto flex`}
    >
      {history.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-5 w-full col-span-full text-primary-theme">
          <IconHistory size={50} />
          <p className="text-xl text-center">
            Your history is empty. Make a purchase to start seeing activity
            here.
          </p>
        </div>
      )}
      {history.map((historyItem) => (
        <CardItemsHistory
          item={historyItem}
          key={historyItem.date.toString()}
        />
      ))}
    </article>
  );
};
