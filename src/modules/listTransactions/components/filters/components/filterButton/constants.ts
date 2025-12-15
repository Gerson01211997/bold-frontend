import { SalesType } from "@/services/transactions/transactions.enum";
import type { Option } from "@/modules/listTransactions/components/filters/components/filterButton/types";

export const OPTIONS: Option[] = [
  {
    id: "dataphone",
    value: SalesType.TERMINAL,
    labelKey: "listTransactions.listRow.filters.terminal",
  },
  {
    id: "payment-link",
    value: SalesType.PAYMENT_LINK,
    labelKey: "listTransactions.listRow.filters.link",
  },
  {
    id: "all",
    value: null,
    labelKey: "listTransactions.listRow.filters.viewAll",
  },
];
