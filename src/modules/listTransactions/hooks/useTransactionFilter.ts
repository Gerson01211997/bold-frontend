import { useMemo } from "react";
import { normalizeNumberString } from "@/lib/normalizeNumberString";
import { generateDateVariants } from "@/lib/generateDateVariants";
import { getTransactionStatusTranslation } from "@/lib/getTransactionStatusTranslation";
import { formatCOP } from "@/lib/formatCurrency";
import type { useTransactionsFiltersParams } from "@/modules/listTransactions/hooks/types";
import { ENUM_TABS_VALUE } from "@/modules/listTransactions/components/filters/components/tabsFilters/enum";
import type { Locale } from "@/lib/translations";

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
      let locale: Locale = "es";
      try {
        const stored = localStorage.getItem("locale");
        if (stored === "es" || stored === "en") locale = stored;
      } catch {}

      const statusOrig = tx.status;
      const statusTrans = getTransactionStatusTranslation(statusOrig, locale);

      const rawAmount = (tx.amount ?? 0).toString();
      const formattedAmount = formatCOP(tx.amount ?? 0);
      const amountNormalize = normalizeNumberString(rawAmount);
      const formattedAmountNoSymbols = normalizeNumberString(formattedAmount);

      const dateVariants = generateDateVariants(tx.createdAt).map((d) =>
        d.toLowerCase(),
      );

      const searchableItems = [
        tx.id,
        tx.transactionReference,
        rawAmount,
        formattedAmount,
        amountNormalize,
        formattedAmountNoSymbols,
        ...dateVariants,
        tx.paymentMethod,
        statusOrig,
        statusTrans,
        tx.salesType,
      ].map((i) => (i || "").toString().toLowerCase());

      const normalizedQuery = normalizeNumberString(query);
      return searchableItems.some(
        (item) => item.includes(query) || item.includes(normalizedQuery),
      );
    });
  }, [filteredWithoutSearch, search]);

  return {
    filtered,
    filteredWithoutSearch,
  };
}
