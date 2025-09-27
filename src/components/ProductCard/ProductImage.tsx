import { ImageLazy } from "../Common";
interface ProductImageProps {
  thumbnail: string;
  title: string;
  discountPercentage: number;
  isAvailable: boolean;
}

export const ProductImage = ({
  discountPercentage,
  thumbnail,
  title,
  isAvailable,
}: ProductImageProps) => {
  return (
    <div className="relative">
      <div className="w-full h-44 bg-border border-b border-border dark:border-border-dark overflow-hidden relative">
        <ImageLazy
          alt={`Product: ${title}`}
          src={thumbnail}
          className="w-full h-full object-contain transition-allduration-300 ease-linear"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-background-dark/50 z-50 flex items-center justify-center">
            <span className="bg-red-background rounded-full text-text-dark px-2 py-1 font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        <div></div>
      </div>
      <span className="absolute top-2 left-5 bg-accent dark:bg-accent-dark text-text-dark rounded-xl px-2 text-sm font-semibold py-1">
        {discountPercentage}% OFF
      </span>
    </div>
  );
};
