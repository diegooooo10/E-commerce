import { NavLink } from "react-router-dom";
import { routesNav } from "../../constants";
import { IconClose } from "../Icons";
import { useModalsStore } from "../../store";

export const NavbarMobile = () => {
  const setIsOpenNavbar = useModalsStore((state) => state.setIsOpenNavbar);
  return (
    <div className="fixed inset-0 z-[200] text-primary-theme flex justify-center items-center bg-theme">
      <button
        onClick={() => setIsOpenNavbar()}
        className="md:hidden absolute top-4 right-4 cursor-pointer"
      >
        <IconClose />
      </button>
      <ul className="flex flex-col items-center gap-5 w-full  md:hidden">
        {routesNav.map((route) => (
          <li key={route.route} onClick={() => setIsOpenNavbar()}>
            <NavLink
              to={route.route}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b border-b-blue-500 text-primary-theme font-semibold"
                    : "text-secondary-theme"
                }`
              }
            >
              {route.title}
            </NavLink>
          </li>
        ))}
        <li onClick={() => setIsOpenNavbar()}>
          <NavLink
            to={"/private/settings"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "border-b border-b-blue-500 text-primary-theme font-semibold"
                  : "text-secondary-theme"
              }`
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
