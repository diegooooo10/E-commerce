import { Navigate, Outlet } from "react-router-dom";
import { validateUser } from "../utils";

export const AuthRoute = () => {
  const userString = localStorage.getItem("user");
  const { user, isValidUser } = validateUser({ userString });

  return user && isValidUser !== -1 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
