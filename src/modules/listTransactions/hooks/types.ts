import type { Transaction } from "@/services/transactions/transactions.types";

export interface useTransactionsFiltersParams {
  data: Transaction[];
  search: string;
  dateRange: string | null;
  salesType: string[] | null;
}
