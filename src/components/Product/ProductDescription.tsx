import { IconStar } from "../Icons";
interface DescriptionTableProps {
  label: string;
  value: string | number;
}
interface ProductDescriptionProps {
  price: number;
  discountPercentage: number;
  rating: number;
  description: string;
  descriptionTable: DescriptionTableProps[];
  title: string;
  tags: string[];
  addToCart: () => void;
  isAvailable: boolean;
}
export const ProductDescription = ({
  price,
  title,
  discountPercentage,
  rating,
  description,
  descriptionTable,
  tags,
  addToCart,
  isAvailable,
}: ProductDescriptionProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-2 items-center">
        <span className="font-bold text-primary-theme text-xl">{`$${price}`}</span>
        <span className="dark:bg-accent-dark/70 bg-accent/80 text-text-dark rounded-xl px-2 text-xs font-semibold py-1">
          {discountPercentage}% OFF
        </span>
      </div>
      <div className="flex gap-1 text-primary-theme">
        {[...Array(5)].map((_, index) => (
          <IconStar
            key={index}
            size={20}
            className={`${
              Math.floor(rating) > index
                ? "fill-yellow-500 text-yellow-500"
                : "dark:fill-border-dark dark:text-border-dark fill-border text-border"
            } transition-theme`}
          />
        ))}
        <span className="ml-2 text-sm font-semibold">{`(${rating})`}</span>
      </div>
      <p className="font-semibold ">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {descriptionTable.map((item) => (
          <p className="text-sm" key={item.label}>
            <span className="font-bold">{item.label} </span>
            <span className="">{item.value}</span>
          </p>
        ))}
        <div className="col-span-full flex gap-2 flex-wrap mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="dark:bg-accent-dark/70 bg-accent/80 text-text-dark rounded px-2 text-sm py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        className={`w-full accent-component py-2 disabled:cursor-not-allowed disabled:opacity-70 ${
          !isAvailable && "cursor-not-allowed opacity-50"
        }`}
        onClick={addToCart}
        disabled={!isAvailable}
      >
        {!isAvailable ?   "Out of stock" : "Add to cart"}
      </button>
    </div>
  );
};
