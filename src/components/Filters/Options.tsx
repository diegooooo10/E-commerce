import { allCategories, sortValues } from "../../constants";
import type {
  AllCategoriesFilter,
  FilterOptions,
  SortOptions,
} from "../../types";
interface OptionsProps {
  category: AllCategoriesFilter;
  sort: SortOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}
export const Options = ({ category, setFilters, sort }: OptionsProps) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <div className="flex gap-2 md:items-center md:flex-row flex-col">
        <label
          htmlFor="categories"
          className="font-medium text-text-primary dark:text-text-primary-dark"
        >
          Categories:
        </label>
        <select
          name="categories"
          id="categories"
          value={category}
          className="outline-2 outline-border dark:outline-border-dark focus:outline-blue-500 dark:focus:outline-blue-700 px-2 py-1 flex items-center rounded-md w-full"
          onChange={(e) => {
            const value = e.target.value;
            const isValid = allCategories.includes(
              value as AllCategoriesFilter
            );
            if (isValid) {
              setFilters((prev) => ({
                ...prev,
                category: value as AllCategoriesFilter,
              }));
            }
          }}
        >
          {allCategories.map((category) => (
            <option
              value={category}
              key={category}
              className="bg-background dark:bg-background-dark text-primary-theme"
            >
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 md:items-center md:flex-row flex-col">
        <label
          htmlFor="sort"
          className="font-medium text-text-primary dark:text-text-primary-dark"
        >
          Sort:
        </label>

        <select
          name="sort"
          id="sort"
          value={sort}
          className="outline-2 outline-border dark:outline-border-dark focus:outline-blue-500 dark:focus:outline-blue-700 px-2 py-1 flex items-center rounded-md w-full"
          onChange={(e) => {
            const value = e.target.value;
            const isValid = sortValues.some((option) => option.value === value);
            if (isValid) {
              setFilters((prev) => ({
                ...prev,
                sort: value as SortOptions,
              }));
            }
          }}
        >
          {sortValues.map((sort) => (
            <option
              value={sort.value}
              key={sort.value}
              className="bg-background dark:bg-background-dark text-primary-theme"
            >
              {sort.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
