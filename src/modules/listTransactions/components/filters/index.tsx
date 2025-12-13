
import DateTabs from "./components/tabsFilters";
import FilterButton from "./components/filterButton"
function Filters() {
  return (
    <div className="flex flex-col gap-4">
      <DateTabs />
      <FilterButton />
    </div>
  );
}

export default Filters
