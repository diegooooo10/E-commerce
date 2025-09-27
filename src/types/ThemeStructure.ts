export type Theme = "dark" | "light";
export type ThemeStructure = {
  theme: Theme;
  changeTheme: () => void;
};
