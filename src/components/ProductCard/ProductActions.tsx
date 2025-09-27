import { IconHeart } from "../Icons";

interface ProductActionsProps {
  handleAddToCart: (e: React.MouseEvent) => void;
  handleFavorite: (e: React.MouseEvent) => void;
  isFavorite: boolean;
  isAvailable: boolean;
}

export const ProductActions = ({
  handleAddToCart,
  handleFavorite,
  isFavorite,
  isAvailable,
}: ProductActionsProps) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <button
        className={`px-5 py-2 accent-component disabled:cursor-not-allowed disabled:opacity-70 ${
          !isAvailable && "cursor-not-allowed opacity-50"
        }`}
        onClick={handleAddToCart}
        disabled={!isAvailable}
      >
        {!isAvailable ? "Out of stock" : "Add to cart"}
      </button>
      <button onClick={handleFavorite} aria-label="add to favorites">
        <IconHeart
          className={`cursor-pointer text-background-dark dark:text-background transition-all duration-1000 ease-linear ${
            isFavorite && "fill-background-dark dark:fill-background"
          }`}
        />
      </button>
    </div>
  );
};
