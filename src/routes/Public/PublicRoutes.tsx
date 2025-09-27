import { Navigate, Route } from "react-router-dom";
import { RouteWithNotFound } from "../RouteWithNotFound";
import { lazy, Suspense } from "react";
import { CircleLoader } from "../../components";
import { validateUser } from "../../utils";
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

export const PublicRoutes = () => {
  const userString = localStorage.getItem("user");
  const { user, isValidUser } = validateUser({ userString });
  const isLogged = user && isValidUser !== -1;

  return (
    <Suspense fallback={<CircleLoader />}>
      <RouteWithNotFound>
        <Route
          path="/"
          index
          element={
            isLogged ? (
              <Navigate to="/private/products" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </RouteWithNotFound>
    </Suspense>
  );
};
