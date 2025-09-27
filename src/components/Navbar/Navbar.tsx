import { useModalsStore } from "../../store";
import { useEffect } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { useIsDesktop } from "../../utils";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarAction } from "./NavbarAction";

export const Navbar = () => {
  const { isOpenNavbar, setIsOpenNavbar } = useModalsStore();
  const isDektop = useIsDesktop();

  useEffect(() => {
    if (isDektop) setIsOpenNavbar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDektop]);

  return (
    <header
      className={`${
        isOpenNavbar ? "" : "fixed"
      } z-[100] bg-theme text-primary-theme w-full h-[4.5rem] outline outline-border dark:outline-border-dark "`}
    >
      <nav className="grid md:grid-cols-3 grid-cols-2 place-items-center max-w-7xl h-full lg:max-w-10/12 mx-auto px-4 md:px-0">
        <h1 className="font-bold text-xl justify-self-start">E-COMMERCE</h1>
        {isDektop && <NavbarDesktop />}
        {isOpenNavbar && !isDektop && <NavbarMobile />}
        <NavbarAction />
      </nav>
    </header>
  );
};
