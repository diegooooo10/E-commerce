import { create } from "zustand";
import type { ThemeStructure } from "../../types";
import { initialTheme, THEME_KEY } from "../../constants";
import { saveToLocalstorage } from "../../utils";

export const useThemeStore = create<ThemeStructure>((set, get) => ({
  theme: initialTheme(),

  changeTheme: () => {
    const newState = get().theme === "dark" ? "light" : "dark";
    saveToLocalstorage(newState, THEME_KEY);

    return set(() => ({
      theme: newState,
    }));
  },
}));
