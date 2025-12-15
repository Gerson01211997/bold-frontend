"use client";

import TerminalIcon from "@/components/icons/TerminalIcon";
import type { Transaction } from "@/services/transactions/transactions.types";
import { className } from "./style";
import { formatDateTime } from "@/lib/formatDateTime";
import { formatCOP } from "@/lib/formatCurrency";

type Props = {
  transaction: Transaction;
  index: number;
  onSelect: (tx: Transaction) => void;
};

function TableRow({ transaction, index, onSelect }: Props) {
  const isSuccessful = transaction.status === "SUCCESSFUL";

  return (
    <tr
      onClick={() => onSelect(transaction)}
      className={`${className.tr} ${transaction.deduction && className.trWithTop}`}
      style={{
        borderLeft: `4px solid ${
          index % 2 === 0 ? "var(--bold-blue)" : "transparent"
        }`,
      }}
    >
      <td
        className={`${className.tdTransaction} ${transaction.deduction && className.trWithTop}`}
      >
        <div className={className.tdTransactionContent}>
          <TerminalIcon className="h-4 w-4" /> <span>{transaction.status}</span>
        </div>
      </td>
      <td className={className.tdDate}>
        <div className={className.tdDateContent}>
          <span className={className.tdDateMain}>
            {formatDateTime(transaction.createdAt)}
          </span>
        </div>
      </td>
      <td className={className.tdPaymentMethod}>
        <div className={className.tdPaymentMethodContent}>
          <TerminalIcon className="h-4 w-4" />
          <span>{transaction.paymentMethod}</span>
        </div>
      </td>
      <td className={className.tdId}>{transaction.id}</td>
      <td className={className.tdAmount}>
        <div className={className.tdAmountContent}>
          <span
            className={
              isSuccessful ? className.amountSuccess : className.amountFailed
            }
          >
            {formatCOP(transaction.amount)}
          </span>
          {transaction.deduction && (
            <span className={className.deduction}>
              Deducción Bold
              <span className={className.deductionAmount}>
                -{formatCOP(transaction.deduction)}
              </span>
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
