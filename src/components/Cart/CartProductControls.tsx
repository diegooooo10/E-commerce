import type { Product } from "../../models";
import { useCartStore } from "../../store";
import { IconTrash } from "../Icons";
interface CartProductControlsProps {
  product: Product;
}
export const CartProductControls = ({ product }: CartProductControlsProps) => {
  const decrement = useCartStore((state) => state.decrementQty);
  const increase = useCartStore((state) => state.increaseQty);
  const remove = useCartStore((state) => state.removeProduct);
  return (
    <div className="flex items-center justify-between md:flex-col px-4 pb-5 md:p-0">
      <button
        aria-label="delete product"
        onClick={() => remove(product)}
        className="p-2 rounded-full cursor-pointer self-end"
      >
        <IconTrash className="text-red-primary fill-red-primary w-6 h-6" />
      </button>
      <div className="flex items-center gap-5 rounded-full p-1">
        <button
          aria-label="decrement quantity product"
          onClick={() => decrement(product)}
          className="w-10 h-10 flex items-center justify-center card rounded-full cursor-pointer"
        >
          -
        </button>
        <button
          aria-label="add quantity product"
          onClick={() => increase(product)}
          className="w-10 h-10 flex items-center justify-center card rounded-full cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};
