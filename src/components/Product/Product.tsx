import { useParams } from "react-router-dom";
import { useProduct } from "../../api";
import { CircleLoader } from "../Loaders";
import { ProductImages } from "./ProductImages";
import { ProductReviews } from "./ProductReviews";
import { ProductDescription } from "./ProductDescription";
import { useCartStore, useFavoritesStore } from "../../store";
import { IconHeart } from "../Icons";
import { useEffect, useState } from "react";
import { getFavoriteIndex } from "../../utils";

interface DescriptionTableProps {
  label: string;
  value: string | number;
}

export const Product = () => {
  const addToCart = useCartStore((state) => state.updateCart);
  const { id } = useParams();
  const { data, isLoading, error, isPending } = useProduct(id || "0");
  const addFavorite = useFavoritesStore((state) => state.updateFavorites);

  const descriptionTable: DescriptionTableProps[] = [
    {
      label: "Brand:",
      value: data?.brand || "Unknown",
    },
    {
      label: "Category:",
      value: data?.category || "Unknown",
    },
    { label: "Availability:", value: data?.availabilityStatus || "Unknown" },
    { label: "Stock:", value: data?.stock || "0" },
    {
      label: "Return Policy:",
      value: data?.returnPolicy || "No return policy",
    },
    {
      label: "Shipping:",
      value: data?.shippingInformation || "No shipping information",
    },
    {
      label: "Warranty:",
      value: data?.warrantyInformation || "No warranty information",
    },
    {
      label: "Dimensions:",
      value: data?.dimensions
        ? `${data.dimensions.width} x ${data.dimensions.height} cm`
        : "N/A",
    },
  ];
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  
  useEffect(() => {
    if (data){
      setIsFavorite(getFavoriteIndex(data.id, data.title) !== -1);
    } 
  }, [data]);


  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!data) return;
    addFavorite(data);
    setIsFavorite((prev) => !prev);
  };
  return (
    <section className="card md:mx-auto max-w-6xl p-5 my-4 mx-4 ">
      {isLoading || isPending ? <CircleLoader /> : null}
      {error && (
        <span className="text-error text-center w-full text-lg font-semibold">
          {error.message}
        </span>
      )}
      {!data && !isLoading && !error && !isPending && (
        <span className="text-error text-center w-full text-lg font-semibold">
          No product found
        </span>
      )}
      {data && !isLoading && !error && !isPending && (
        <>
          <div className="flex flex-col md:flex-row gap-2 mb-6 relative">
            <button onClick={handleFavorite} aria-label="add to favorites" className="absolute right-2 top-2">
              <IconHeart
                className={`cursor-pointer text-background-dark dark:text-background transition-all duration-1000 ease-linear ${
                  isFavorite && "fill-background-dark dark:fill-background"
                }`}
              />
            </button>
            <ProductImages images={data.images} />
            <ProductDescription
              description={data.description}
              descriptionTable={descriptionTable}
              discountPercentage={data.discountPercentage}
              price={data.price}
              rating={data.rating}
              tags={data.tags}
              title={data.title}
              addToCart={() => {
                const isAvailable = data.stock >= 1;
                if (!isAvailable) return;
                addToCart(data);
              }}
              isAvailable={data.stock >= 1}
            />
          </div>
          <div className="flex flex-col gap-5">
            <ProductReviews reviews={data.reviews} />
          </div>
        </>
      )}
    </section>
  );
};
