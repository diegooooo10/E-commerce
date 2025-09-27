import { useThemeStore } from "../../store";

export const ChangeTheme = () => {
  const changeTheme = useThemeStore((state) => state.changeTheme);

  return (
    <div className="flex flex-col gap-5 transition-all mb-5">
      <h2 className="font-bold text-start text-primary-theme">Change Theme</h2>

      <div className="rounded-lg border bg-card-dark dark:bg-card  p-4 transition-theme text-text-dark dark:text-text">
        <h3 className="text-lg font-semibold text- mb-2">Example title</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This is a preview of what your components will look like.{" "}
        </p>
      </div>
      <button onClick={changeTheme} className="button accent-component">
        Change Theme
      </button>
    </div>
  );
};
