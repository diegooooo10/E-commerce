import type { Reviews } from "../../models";
import { convertDate } from "../../utils";
import { IconStar } from "../Icons";

interface ProductReviewsProps {
  reviews: Reviews[];
}
export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.comment} className="card p-5 text-primary-theme">
          <div className="flex items-center ">
            <p className="font-bold mr-2">{review.reviewerName}</p>
            {[...Array(5)].map((_, index) => (
              <IconStar
                className={`${
                  Math.floor(review.rating) > index
                    ? "fill-yellow-500 text-yellow-500"
                    : "dark:fill-border-dark dark:text-border-dark fill-border text-border"
                }`}
                key={index}
                size={14}
              />
            ))}
          </div>
          <p>{review.comment}</p>
          <p className="text-sm text-secondary-theme">
            {convertDate(review.date)}
          </p>
          <p className="font-semibold text-sm text-secondary-theme">
            {review.reviewerEmail}
          </p>
        </div>
      ))}
    </>
  );
};
