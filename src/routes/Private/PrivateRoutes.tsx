import { Navigate, Route } from "react-router-dom";
import { RouteWithNotFound } from "../RouteWithNotFound";
import { lazy, Suspense } from "react";
import { CircleLoader } from "../../components";

const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const CartPage = lazy(() => import("../../pages/CartPage"));
const HistoryPage = lazy(() => import("../../pages/HistoryPage"));
const ProductPage = lazy(() => import("../../pages/ProductPage"));
const SettingsPage = lazy(() => import("../../pages/SettingsPage"));

export const PrivateRoutes = () => {
  return (
    <Suspense fallback={<CircleLoader />}>
      <RouteWithNotFound>
        <Route path="/" index element={<Navigate to={"/private/products"} />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:category" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </RouteWithNotFound>
    </Suspense>
  );
};
