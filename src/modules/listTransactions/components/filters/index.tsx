import DateTabs from "./components/tabsFilters";
import FilterButton from "./components/filterButton";
import { className } from "./style";

function Filters() {
  return (
    <div className={className.container}>
      <DateTabs />
      <FilterButton />
    </div>
  );
}

export default Filters;
