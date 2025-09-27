import { IconEyeClose, IconEyeOpen } from "../Icons";
interface EyePasswordProps {
  id: string;
  setVisiblePassword: React.Dispatch<React.SetStateAction<boolean>>;
  visiblePassword: boolean;
}
export const EyePassword = ({
  id,
  setVisiblePassword,
  visiblePassword,
}: EyePasswordProps) => {
  return (
    <div
      className="absolute right-1 top-1 cursor-pointer"
      onClick={() => {
        const el = document.getElementById(id);
        el?.classList.add("opacity-0", "scale-90");
        setTimeout(() => {
          setVisiblePassword((prev) => !prev);
          el?.classList.remove("opacity-0", "scale-90");
        }, 150);
      }}
    >
      <div id={id} className="transition-all duration-150 ease-linear ">
        {visiblePassword ? <IconEyeOpen /> : <IconEyeClose />}
      </div>
    </div>
  );
};
