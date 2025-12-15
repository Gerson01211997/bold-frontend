import { useMemo } from "react";
import { formatDateTime } from "@/lib/formatDateTime";
import { formatCOP } from "@/lib/formatCurrency";
import type { useTransactionsFiltersParams } from "@/modules/listTransactions/hooks/types";
import { ENUM_TABS_VALUE } from "@/modules/listTransactions/components/filters/components/tabsFilters/enum";

export function useTransactionsFilters({
  data,
  search,
  dateRange,
  salesType,
}: useTransactionsFiltersParams) {
  const filteredWithoutSearch = useMemo(() => {
    const now = new Date();

    return data.filter((tx) => {
      if (
        salesType &&
        (!Array.isArray(salesType) || !salesType.includes(tx.salesType))
      )
        return false;

      if (dateRange) {
        const created = new Date(tx.createdAt);

        if (dateRange === ENUM_TABS_VALUE.TODAY) {
          return (
            created.getFullYear() === now.getFullYear() &&
            created.getMonth() === now.getMonth() &&
            created.getDate() === now.getDate()
          );
        }

        if (dateRange === ENUM_TABS_VALUE.WEEK) {
          const diffDays =
            (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
          return diffDays <= 7;
        }

        if (dateRange === ENUM_TABS_VALUE.MONTH) {
          return (
            created.getFullYear() === now.getFullYear() &&
            created.getMonth() === now.getMonth()
          );
        }
      }

      return true;
    });
  }, [data, dateRange, salesType]);

  const filtered = useMemo(() => {
    if (!search) return filteredWithoutSearch;

    const query = search.toLowerCase().trim();

    return filteredWithoutSearch.filter((tx) => {
      const searchable = [
        tx.id,
        tx.transactionReference,
        formatCOP(tx.amount ?? 0),
        formatDateTime(tx.createdAt),
        tx.paymentMethod,
        tx.salesType,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [filteredWithoutSearch, search]);

  return {
    filtered,
    filteredWithoutSearch,
  };
}
