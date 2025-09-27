import type { PropsWithChildren } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";

export const RouteWithNotFound = ({ children }: PropsWithChildren) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
