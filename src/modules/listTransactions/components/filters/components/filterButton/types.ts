import type { SalesType } from "@/services/transactions/transactions.enum";

export interface Option {
  id: string;
  value: SalesType | null;
  labelKey: string;
}
