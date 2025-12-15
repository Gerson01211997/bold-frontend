import DateTabs from "@/modules/listTransactions/components/filters/components/tabsFilters";
import FilterButton from "@/modules/listTransactions/components/filters/components/filterButton";
import { className } from "@/modules/listTransactions/components/filters/style";

function Filters() {
  return (
    <div className={className.container}>
      <DateTabs />
      <FilterButton />
    </div>
  );
}

export default Filters;
