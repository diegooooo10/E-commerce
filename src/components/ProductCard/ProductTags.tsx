interface ProductTagsProps {
  tags: string[];
  brand: string;
  category: string;
}
export const ProductTags = ({ brand, category, tags }: ProductTagsProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, idx) => (
          <div
            key={idx}
            className="text-xs text-center flex items-center justify-center text-text-dark font-semibold  rounded px-2 py-1 bg-accent dark:bg-accent-dark"
          >
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-secondary-theme text-sm">{brand ?? "Unknown"}</p>
        <p className="text-secondary-theme text-sm">{category ?? "Unknown"}</p>
      </div>
    </>
  );
};
