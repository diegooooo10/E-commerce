import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const ProtectedLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[4.5rem] dark:bg-bg-dark w-full min-h-dvh bg-bg bg-theme text-primary-theme">
        <article className="max-w-7xl lg:max-w-10/12 mx-auto">
          <Outlet />
        </article>
      </main>
    </>
  );
};
