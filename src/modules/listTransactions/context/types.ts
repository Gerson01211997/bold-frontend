import type { Transaction } from "@/services/transactions/transactions.types";

export interface TransactionsContextValue {
  data: Transaction[];
  filtered: Transaction[];
  filteredWithoutSearch: Transaction[];
  loading: boolean;
  error: Error | null;
  total: number;
  search: string;
  dateRange: string | null;
  salesType: string[] | null;
  setSearch: (s: string) => void;
  setDateRange: (d: string | null) => void;
  setSalesType: (s: string[] | null) => void;
}
