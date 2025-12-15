import type { Transaction } from "@/services/transactions/transactions.types";

export interface RowProps {
  transaction: Transaction;
  index: number;
  onSelect: (tx: Transaction) => void;
}
