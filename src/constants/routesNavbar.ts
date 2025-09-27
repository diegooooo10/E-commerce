interface RouteNav {
  title: string;
  route: string;
}
export const routesNav: RouteNav[] = [
  {
    route: "/private/products",
    title: "Products",
  },
  {
    route: "/private/cart",
    title: "Cart",
  },
  {
    route: "/private/favorites",
    title: "Favorites",
  },
  {
    route: "/private/history",
    title: "History",
  },
];
