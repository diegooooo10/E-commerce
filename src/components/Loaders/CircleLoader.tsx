interface CircleLoaderProps {
  className?: string;
}
export const CircleLoader = ({ className }: CircleLoaderProps) => {
  return (
    <div
      className={`rounded-full h-10 w-10  border-4  mx-auto animate-spin border-accent dark:border-accent-dark border-t-transparent dark:border-t-transparent ${className}`}
    ></div>
  );
};
