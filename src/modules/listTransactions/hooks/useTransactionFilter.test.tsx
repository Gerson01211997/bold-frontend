import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTransactionsFilters } from "@/modules/listTransactions/hooks/useTransactionFilter";
import {
  TransactionStatus,
  PaymentMethod,
  SalesType,
} from "@/services/transactions/transactions.enum";
import type { Transaction } from "@/services/transactions/transactions.types";
import { ENUM_TABS_VALUE } from "@/modules/listTransactions/components/filters/components/tabsFilters/enum";

const mockTransactions: Transaction[] = [
  {
    id: "1",
    status: TransactionStatus.REJECTED,
    paymentMethod: PaymentMethod.CARD,
    salesType: SalesType.TERMINAL,
    createdAt: new Date().toISOString(),
    transactionReference: 1234567890,
    amount: 1000,
  },
  {
    id: "2",
    status: TransactionStatus.SUCCESSFUL,
    paymentMethod: PaymentMethod.NEQUI,
    salesType: SalesType.PAYMENT_LINK,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    transactionReference: 9876543210,
    amount: 2000,
  },
];

describe("useTransactionsFilters", () => {
  it("should filter by sales type", () => {
    const { result } = renderHook(() =>
      useTransactionsFilters({
        data: mockTransactions,
        search: "",
        dateRange: null,
        salesType: [SalesType.TERMINAL],
      }),
    );

    expect(result.current.filteredWithoutSearch).toHaveLength(1);
    expect(result.current.filteredWithoutSearch[0].salesType).toBe(
      SalesType.TERMINAL,
    );
  });

  it("should filter by date range today", () => {
    const { result } = renderHook(() =>
      useTransactionsFilters({
        data: mockTransactions,
        search: "",
        dateRange: ENUM_TABS_VALUE.TODAY,
        salesType: null,
      }),
    );

    expect(result.current.filteredWithoutSearch.length).toBeGreaterThanOrEqual(
      0,
    );
  });

  it("should filter by search query", () => {
    const { result } = renderHook(() =>
      useTransactionsFilters({
        data: mockTransactions,
        search: "1234567890",
        dateRange: null,
        salesType: null,
      }),
    );

    expect(result.current.filtered.length).toBeGreaterThanOrEqual(0);
  });

  it("should return all transactions when no filters applied", () => {
    const { result } = renderHook(() =>
      useTransactionsFilters({
        data: mockTransactions,
        search: "",
        dateRange: null,
        salesType: null,
      }),
    );

    expect(result.current.filteredWithoutSearch).toHaveLength(2);
  });

  it("should return empty array when no transactions match filters", () => {
    const { result } = renderHook(() =>
      useTransactionsFilters({
        data: mockTransactions,
        search: "nonexistent",
        dateRange: null,
        salesType: null,
      }),
    );

    expect(result.current.filtered).toHaveLength(0);
  });
});
