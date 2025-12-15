import BancolombiaIcon from "@/components/icons/BancolombiaIcon";
import CardIcon from "@/components/icons/CardIcon";
import DaviPlataIcon from "@/components/icons/DaviPlataIcon";
import IconLink from "@/components/icons/IconLink";
import NequiIcon from "@/components/icons/NequiIcon";
import PSEIcon from "@/components/icons/PSEIcon";
import TerminalIcon from "@/components/icons/TerminalIcon";
import {
  PaymentMethod,
  SalesType,
  type TransactionStatus,
} from "@/services/transactions/transactions.enum";
import type { JSX } from "react";

export function transactionStatusLang({
  transaction,
}: {
  transaction: TransactionStatus;
}) {
  return `listTransactions.listRow.header.rows.transactionStatus.${transaction}`;
}

export function getIconBySalesType({ salesType }: { salesType: SalesType }) {
  const icons: Record<SalesType, JSX.Element> = {
    [SalesType.TERMINAL]: <TerminalIcon className="h-4 w-4 text-bold-gray" />,
    [SalesType.PAYMENT_LINK]: <IconLink className="h-4 w-4 text-bold-gray" />,
  };

  return icons[salesType] ?? null;
}

export function getIconByPayMethod({
  payMethod,
}: {
  payMethod: PaymentMethod;
}) {
  const icons: Record<PaymentMethod, JSX.Element> = {
    [PaymentMethod.BANCOLOMBIA]: <BancolombiaIcon className="h-4 w-4" />,
    [PaymentMethod.CARD]: <CardIcon className="h-4 w-4" />,
    [PaymentMethod.DAVIPLATA]: <DaviPlataIcon className="h-4 w-4" />,
    [PaymentMethod.NEQUI]: <NequiIcon className="h-4 w-4" />,
    [PaymentMethod.PSE]: <PSEIcon className="h-4 w-4" />,
  };

  return icons[payMethod] ?? null;
}
