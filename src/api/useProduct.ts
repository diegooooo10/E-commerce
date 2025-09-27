import { useQuery } from "@tanstack/react-query";
import { API_PRODUCT_URL } from "../constants";
import type { Product } from "../models";

export const useProduct = (id: string) => {
  return useQuery<Product, Error, Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`${API_PRODUCT_URL}${id}`);
      if (!res.ok) {
        const errorText = await res.text();
        const errorJSON: { message: string } = JSON.parse(errorText);
        throw new Error(
          `Error ${res.status}: ${errorJSON.message || "Products not found"}`
        );
      }
      return res.json();
    },
    retry: false,
  });
};
