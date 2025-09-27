import { Route } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { RouteWithNotFound } from "./RouteWithNotFound";
import { PrivateRoutes } from "./Private";
import { ProtectedLayout, PublicLayout } from "../layout";
import { PublicRoutes } from "./Public";

export const AppRoutes = () => {
  return (
    <RouteWithNotFound>
      <Route element={<AuthRoute />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/private/*" element={<PrivateRoutes />} />
        </Route>
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/*" element={<PublicRoutes />} />
      </Route>
    </RouteWithNotFound>
  );
};
