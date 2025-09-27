import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-primary-theme min-h-[calc(100dvh-4.5rem)]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 accent-component button text-center max-w-fit"
      >
        <button> Go back home</button>
      </Link>
    </div>
  );
}
