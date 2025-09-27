import type { Theme } from "../types";
import { THEME_KEY } from "./localStorageKeys";

export const initialTheme = (): Theme => {
  const localstorageTheme = localStorage.getItem(THEME_KEY) ?? "dark";
  return localstorageTheme === "dark" ? "dark" : "light";
};
