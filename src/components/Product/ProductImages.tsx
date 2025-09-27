import { useEffect, useState } from "react";

interface ProductImagesProps {
  images: string[];
}
export const ProductImages = ({ images }: ProductImagesProps) => {
  const [currentSrc, setCurrentSrc] = useState(images[0]);

  useEffect(() => {
    setCurrentSrc(images[0]);
  }, [images]);

  return (
    <div className="md:min-w-96">
      <img
        alt="product"
        src={currentSrc}
        className="md:w-96 md:h-96 w-full h-80 object-contain rounded  bg-border  mb-2"
        height={256}
        width={256}
      />
      {images.map((image) => (
        <img
          key={image}
          src={image}
          className="w-20 h-20 object-cover inline-block mr-1 rounded border border-border dark:border-border-dark  bg-border cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-linear"
          onClick={() => setCurrentSrc(image)}
          alt={`Thumbnail ${image}`}
        />
      ))}
    </div>
  );
};
