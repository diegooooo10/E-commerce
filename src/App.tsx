import "./index.css";
import { useEffect } from "react";
import { AppProvider } from "./providers";
import { AppRoutes } from "./routes";
import { useModalsStore, useThemeStore } from "./store";

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const { isOpenNavbar, modal } = useModalsStore();

  useEffect(() => {
    if (modal !== "" || isOpenNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenNavbar, modal]);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
