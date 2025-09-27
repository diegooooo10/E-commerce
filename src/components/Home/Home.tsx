import React, { useEffect, useMemo, useState, useTransition } from "react";
import { useProducts } from "../../api";
import { DivObserver } from "../Common";
import { CircleLoader } from "../Loaders";
import { ProductCard } from "../ProductCard";
import type { Product } from "../../models";
import { Filters } from "../Filters";
import type { AllCategoriesFilter, FilterOptions } from "../../types";
import { allCategories, initialFilters } from "../../constants";
import { IconCart } from "../Icons";
import { updateFilters } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

export const Home = React.memo(() => {
  const { category } = useParams();
  const [filters, setFilters] = useState<FilterOptions>({
    ...initialFilters,
    category: allCategories.includes(category as AllCategoriesFilter)
      ? (category as AllCategoriesFilter)
      : "all categories",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (filters.category === "all categories") {
      navigate(`/private/products`, { replace: true });
    } else {
      navigate(`/private/products/${filters.category}`, { replace: true });
    }
  }, [filters.category, category, navigate]);

  useEffect(() => {}, [filters.category]);
  const {
    data,
    fetchNextPage,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useProducts();

  const allProducts: Product[] = useMemo(
    () => (data ? data.pages.flatMap((page) => page.products) : []),
    [data]
  );

  const filterProducts: Product[] = useMemo(
    () => updateFilters({ allProducts, filters }),
    [allProducts, filters]
  );

  const [, startTransition] = useTransition();

  const transitionFetch = () => {
    startTransition(() => {
      fetchNextPage();
    });
  };

  return (
    <article
      className={`${
        allProducts.length === 0 || isLoading
          ? "flex justify-center items-center min-h-[calc(100dvh-4.5rem)]"
          : "grid lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 md:px-0 p-4"
      } will-change-[background-color]`}
    >
      {allProducts.length > 0 && (
        <Filters filters={filters} setFilters={setFilters} />
      )}
      {!isLoading &&
        !error &&
        filterProducts.length > 0 &&
        filterProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      {isFetchingNextPage && (
        <div className="w-full col-span-full flex justify-center items-center">
          <CircleLoader />
        </div>
      )}
      {!isLoading && !error && allProducts.length === 0 && (
        <p className="text-xl text-error col-span-full ">
          No products available at the moment.
        </p>
      )}
      {filterProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-5 w-full col-span-full text-primary-theme">
          <IconCart size={50} />
          <p className="text-xl text-center">
            No items found. Try adjusting your search or filters.
          </p>
        </div>
      )}
      {error && <span className="text-error">{error.message}</span>}

      {!isLoading &&
        !error &&
        allProducts.length > 0 &&
        hasNextPage &&
        !isFetchingNextPage && <DivObserver fetchNextPage={transitionFetch} />}
    </article>
  );
});
