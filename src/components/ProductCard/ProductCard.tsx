import React, { useState } from "react";
import type { Product } from "../../models";
import { getFavoriteIndex } from "../../utils";
import { useCartStore, useFavoritesStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";
import { ProductTags } from "./ProductTags";
import { ProductActions } from "./ProductActions";
interface ProductCardProps {
  product: Product;
}

export const ProductCard = React.memo(({ product }: ProductCardProps) => {
  const isAvailable = product.stock >= 1;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState<boolean>(
    getFavoriteIndex(product.id, product.title) !== -1
  );
  const addFavorite = useFavoritesStore((state) => state.updateFavorites);
  const addToCart = useCartStore((state) => state.updateCart);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    addFavorite(product);
    setIsFavorite((prev) => !prev);
  };
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAvailable) return;
    addToCart(product);
  };
  return (
    <section
      className="card cursor-pointer hover:scale-[1.03] transition-all hover:shadow-xl"
      onClick={() => navigate(`/private/product/${product.id}`)}
    >
      <ProductImage
        discountPercentage={product.discountPercentage}
        thumbnail={product.thumbnail}
        title={product.title}
        isAvailable={isAvailable}
      />
      <div className="p-5 flex flex-col gap-2 justify-center">
        <ProductDescription
          description={product.description}
          discountPercentage={product.discountPercentage}
          price={product.price}
          rating={product.rating}
          title={product.title}
        />
        <ProductTags
          brand={product.brand}
          category={product.category}
          tags={product.tags}
        />
        <ProductActions
          handleAddToCart={handleAddToCart}
          handleFavorite={handleFavorite}
          isFavorite={isFavorite}
          isAvailable={isAvailable}
        />
      </div>
    </section>
  );
});
