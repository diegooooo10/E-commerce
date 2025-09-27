import { NavLink } from "react-router-dom";
import { routesNav } from "../../constants";

export const NavbarDesktop = () => {
  return (
    <ul className="md:flex gap-8 w-full justify-center hidden">
      {routesNav.map((route) => (
        <li key={route.route}>
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
    </ul>
  );
};
