import { priceWithDiscount } from "../../utils";
import { IconStar } from "../Icons";

interface ProductDescriptionProps {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
}
export const ProductDescription = ({
  description,
  discountPercentage,
  price,
  rating,
  title,
}: ProductDescriptionProps) => {
  return (
    <>
      <h2 className="text-primary-theme font-semibold text-xl line-clamp-1 text-pretty">
        {title}
      </h2>
      <p className="text-secondary-theme text-sm text-pretty line-clamp-3 max-h-16 h-16 ">
        {description}
      </p>

      <div className="w-full flex justify-between items-center">
        <span className="flex gap-2">
          <p className="text-primary-theme font-semibold">{`$${priceWithDiscount(
            discountPercentage,
            price
          )}`}</p>
          <p className="text-secondary-theme font-semibold text-sm line-through relative">{`$${price}`}</p>
        </span>
        <div className="flex items-center justify-center gap-1">

        <p className="text-secondary-theme text-sm">{rating}</p>
        <IconStar className="fill-yellow-500 text-yellow-500" size={14}/>

        </div>
      </div>
    </>
  );
};
