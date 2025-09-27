import { useEffect, useState, useRef } from "react";

interface ImageLazyProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  height?: number;
  width?: number;
}

export const ImageLazy = ({
  src,
  alt,
  className = "",
  placeholder = "/src/assets/images/placehold.png",
  height = 175,
  width = 480,
}: ImageLazyProps) => {
  const [visible, setVisible] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            observer.disconnect();
            setVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 300px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(imgEl);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      fetchPriority="high"
      height={height}
      width={width}
      className={`${className} transition-opacity duration-500 ease-linear ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onError={() => setCurrentSrc(placeholder)}
    />
  );
};
