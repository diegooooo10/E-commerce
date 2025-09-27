import { useInfiniteQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../constants";
import type { Data, ProductsResponse } from "../models";

export const useProducts = () => {
  return useInfiniteQuery<Data, Error, ProductsResponse>({
    queryKey: ["products"],
    queryFn: async ({ pageParam }) => {
      const res = await fetch(`${API_BASE_URL}&skip=${pageParam}`);
      if (!res.ok) {
        const errorText = await res.text();
        const errorJSON: {message: string} = JSON.parse(errorText)
        throw new Error(
          `Error ${res.status}: ${errorJSON.message || "Products not found"}`
        );
      }
      return res.json();
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.products.length < 20) return undefined;
      return allPages.length * 20;
    },
    initialPageParam: 0,
  });
};
