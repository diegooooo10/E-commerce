import type { FilterOptions } from "../../types";
import { Options } from "./Options";
import { Search } from "./Search";

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  filters: FilterOptions;
}
export const Filters = ({ setFilters, filters }: FiltersProps) => {
  return (
    <div className="col-span-full w-full py-2 justify-between flex md:flex-row flex-col gap-5">
      <Search setFilters={setFilters} title={filters.title} />
      <Options setFilters={setFilters} category={filters.category} sort={filters.sort}/>
    </div>
  );
};
