import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, type PropsWithChildren } from "react";
import { CircleLoader, ScrollToTop } from "../components";

const ModalProvider = lazy(
  () => import("../components/Modals/UI/ModalProvider")
);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Suspense fallback={<CircleLoader />}>
        <ModalProvider />
      </Suspense>
    </BrowserRouter>
  );
};
