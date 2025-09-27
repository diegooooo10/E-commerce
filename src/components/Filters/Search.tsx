import { useMemo, useState } from "react";
import { debounce } from "../../utils";
import type { FilterOptions } from "../../types";
interface SearchProps {
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  title: string;
}
export const Search = ({ setFilters, title }: SearchProps) => {
  const [value, setValue] = useState<string>(title);
  const debouncedQuery = useMemo(
    () =>
      debounce((val: string) => {
        setFilters((prev) => ({ ...prev, title: val }));
      }, 300),
    [setFilters]
  );
  return (
    <input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setValue(value);
        debouncedQuery(value);
      }}
      placeholder="Search by name..."
      className="md:max-w-2/5 w-full py-2 px-4 rounded outline outline-border dark:outline-border-dark  focus:outline-accent dark:focus:outline-accent-dark"
      value={value}
    />
  );
};
