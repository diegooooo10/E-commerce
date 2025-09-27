import { useFavoritesStore } from "../../store";
import { IconHeart } from "../Icons";
import { ProductCard } from "../ProductCard";

export const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  return (
    <article
      className={`${
        favorites.length === 0
          ? "flex justify-center items-center min-h-[calc(100dvh-4.5rem)]"
          : "grid lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 md:px-0 p-4"
      } will-change-[background-color]`}
    >
      {favorites.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-5 w-full col-span-full text-primary-theme">
          <IconHeart size={50} className="fill-background-dark dark:fill-background" />
          <p className="text-xl text-center">
            No favorites yet. Add some products to see them here.
          </p>
        </div>
      )}
      {favorites.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </article>
  );
};
