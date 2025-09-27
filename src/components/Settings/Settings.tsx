import { ChangeData } from "./ChangeData";
import { ChangeTheme } from "./ChangeTheme";

export const Settings = () => {
  return (
    <section className="max-w-4xl md:mx-auto my-4 card p-5 transition-all grid gap-5 m-4">
      <h1 className="text- font-bold text-primary-theme text-center">
        Settings
      </h1>
      <ChangeData />
      <ChangeTheme />
    </section>
  );
};
