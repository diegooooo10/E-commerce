import type { SortOptions } from "../types";

interface SortValues {
  value: SortOptions;
  label: string;
}

export const sortValues: SortValues[] = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "A-Z",
    value: "aToZ",
  },
  {
    label: "Z-A",
    value: "zToA",
  },
  {
    label: "Available first",
    value: "availabilityAvailable",
  },
  {
    label: "Unavailable first",
    value: "availabilityUnavailable",
  },
  {
    label: "Price: High to Low",
    value: "priceHighToLow",
  },
  {
    label: "Price: Low to High",
    value: "priceLowToHigh",
  },
  {
    label: "Rating: High to Low",
    value: "ratingHighToLow",
  },
  {
    label: "Rating: Low to High",
    value: "ratingLowToHigh",
  },
];
