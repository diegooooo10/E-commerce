import { useEffect, useRef } from "react";
interface DivObserverProps {
  fetchNextPage: () => void;
}
export const DivObserver = ({ fetchNextPage }: DivObserverProps) => {
  const divObserver = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!divObserver.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchNextPage();
          }
        });
      },
      { rootMargin: "50%" }
    );

    observer.observe(divObserver.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage]);
  return (
    <div ref={divObserver} className="w-full col-span-full min-h-24"></div>
  );
};
