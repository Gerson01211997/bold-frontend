"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransactions } from "@/services/transactions/hooks/useGetTransaction";
import { SalesType } from "@/services/transactions/transactions.enum";
import type { TransactionsContextValue } from "@/modules/listTransactions/context/types";
import { useTransactionsFilters } from "@/modules/listTransactions/hooks/useTransactionFilter";
import { calculateTotal } from "@/lib/calculateTotal";
import { ENUM_TABS_VALUE } from "@/modules/listTransactions/components/filters/components/tabsFilters/enum";

const TransactionsContext = createContext<TransactionsContextValue | undefined>(
  undefined,
);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const { data = [], loading, error } = useTransactions();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [dateRange, setDateRange] = useState<string | null>(
    ENUM_TABS_VALUE.TODAY,
  );
  const [salesType, setSalesType] = useState<string[] | null>(() => {
    const vals = searchParams.getAll("sales");
    const filtered = vals.filter(
      (v) => v === SalesType.PAYMENT_LINK || v === SalesType.TERMINAL,
    );
    return filtered.length ? filtered : null;
  });

  const { filtered, filteredWithoutSearch } = useTransactionsFilters({
    data,
    search,
    dateRange,
    salesType,
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (dateRange) params.set("date", dateRange);
    if (salesType) {
      salesType.forEach((s) => {
        params.append("sales", s);
      });
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [search, dateRange, salesType, pathname, router]);

  const total = calculateTotal(filteredWithoutSearch);

  return (
    <TransactionsContext.Provider
      value={{
        data,
        filtered,
        filteredWithoutSearch,
        loading,
        error,
        search,
        dateRange,
        salesType,
        total,
        setSearch,
        setDateRange,
        setSalesType,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactionsContext() {
  const ctx = useContext(TransactionsContext);
  if (!ctx) {
    throw new Error(
      "useTransactionsContext must be used within TransactionsProvider",
    );
  }
  return ctx;
}
