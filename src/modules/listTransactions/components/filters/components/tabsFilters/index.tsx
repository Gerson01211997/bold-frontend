import { className } from "@/modules/listTransactions/components/filters/components/tabsFilters/style";
import { TABS_NAME } from "@/modules/listTransactions/components/filters/components/tabsFilters/constanst";
import { useTranslations } from "@/hooks/useTranslations";
import { useTransactionsContext } from "@/modules/listTransactions/context/TransactionsContext";
import { memo } from "react";

function DateTabs() {
  const { dateRange, setDateRange } = useTransactionsContext();
  const t = useTranslations();

  const tabs = TABS_NAME.map(({ value, name }) => {
    const isActive = dateRange === value;

    return (
      <button
        key={value}
        type="button"
        onClick={() => setDateRange(isActive ? null : value)}
        className={`${className.tab} ${isActive ? className.tabActive : className.tabInactive}`}
      >
        {t(name)}
      </button>
    );
  });

  return (
    <div className={className.container}>
      <div className={className.tabsWrapper}>{tabs}</div>
    </div>
  );
}

export default memo(DateTabs);
