import type { FilterOptions, SortOptions } from "../types";
import type { Product } from "../models";

interface updateFiltersProps {
  filters: FilterOptions;
  allProducts: Product[];
}
export const updateFilters = ({ allProducts, filters }: updateFiltersProps) => {
  const dataFilter = allProducts.filter((p) => {
    const matchesTitle = p.title.includes(filters.title);
    const matchesCategory =
      filters.category === "all categories" || p.category === filters.category;
    return matchesCategory && matchesTitle;
  });
  
  const sortFunctions: Record<SortOptions, (a: Product, b: Product) => number> = {
    default: () => 0,
    aToZ: (a, b) => a.title.localeCompare(b.title),
    zToA: (a, b) => b.title.localeCompare(a.title),
    priceHighToLow: (a, b) => b.price - a.price,
    priceLowToHigh: (a, b) => a.price - b.price,
    ratingHighToLow: (a, b) => b.rating - a.rating,
    ratingLowToHigh: (a, b) => a.rating - b.rating,
    availabilityAvailable: (a, b) =>
      Number(b.stock) - Number(a.stock),
    availabilityUnavailable: (a, b) =>
      Number(a.stock) - Number(b.stock),
  };
  
  const sortedData = [...dataFilter];
  const sortFn = sortFunctions[filters.sort];
  if (sortFn) sortedData.sort(sortFn);

  return sortedData;
};
