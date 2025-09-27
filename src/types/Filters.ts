export type AllCategories =
  | "beauty"
  | "fragrances"
  | "furniture"
  | "groceries"
  | "home-decoration"
  | "kitchen-accessories"
  | "laptops"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  | "mobile-accessories"
  | "motorcycle"
  | "skin-care"
  | "smartphones"
  | "sports-accessories"
  | "sunglasses"
  | "tablets"
  | "tops"
  | "vehicle"
  | "womens-bags"
  | "womens-dresses"
  | "womens-jewellery"
  | "womens-shoes"
  | "womens-watches";

export type AllCategoriesFilter = AllCategories | "all categories";

export type FilterOptions = {
  title: string;
  category: AllCategoriesFilter;
  sort: SortOptions;
};

export type SortOptions =
  | "default"
  | "aToZ"
  | "zToA"
  | "priceLowToHigh"
  | "priceHighToLow"
  | "ratingHighToLow"
  | "ratingLowToHigh"
  | "availabilityAvailable"
  | "availabilityUnavailable";
