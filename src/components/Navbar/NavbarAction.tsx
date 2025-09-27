import { NavLink } from "react-router-dom";
import { useModalsStore } from "../../store";
import { IconMenu, IconSettings } from "../Icons";

export const NavbarAction = () => {
  const { isOpenNavbar, setIsOpenNavbar } = useModalsStore();

  return (
    <div className="flex justify-self-end gap-5">
      <button className="cursor-pointer hidden md:flex" aria-label="settings">
        <NavLink to={"/private/settings"} aria-label="settings">
          <IconSettings />
        </NavLink>
      </button>
      <button
        className="md:hidden cursor-pointer"
        aria-label="menu navbar"
        onClick={() => setIsOpenNavbar()}
      >
        {!isOpenNavbar && <IconMenu />}
      </button>
    </div>
  );
};
