export interface Data {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Reviews[];
  returnPolicy: string;
  images: string[];
  thumbnail: string;
}
export interface ProductsResponse {
  pageParams: number[];
  pages: Data[];
}

interface Dimensions {
  width: number;
  height: number;
}
export interface Reviews {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}
