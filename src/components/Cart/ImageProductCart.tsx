import { NavLink } from "react-router-dom";
import { ImageLazy } from "../Common";
interface ImageProductCartProps {
  id: number;
  title: string;
  thumbnail: string;
}
export const ImageProductCart = ({
  id,
  thumbnail,
  title,
}: ImageProductCartProps) => {
  return (
    <NavLink to={`/private/product/${id}`}>
      <div className="md:w-24 rounded md:h-24 w-full h-full bg-card overflow-hidden cursor-pointer">
        <ImageLazy
          alt={`product image ${title}`}
          src={thumbnail}
          className="w-full h-full object-contain"
          height={96}
          width={96}
        />
      </div>
    </NavLink>
  );
};
