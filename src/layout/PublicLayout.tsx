import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <main>
      <article className="max-w-7xl lg:max-w-10/12 mx-auto bg-theme text-primary-theme">
        <Outlet />
      </article>
    </main>
  );
};
