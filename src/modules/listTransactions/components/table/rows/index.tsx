"use client";

import { className } from "@/modules/listTransactions/components/table/rows/style";
import { formatDateTime } from "@/lib/formatDateTime";
import { formatCOP } from "@/lib/formatCurrency";
import type { RowProps } from "@/modules/listTransactions/components/table/rows/types";
import {
  getIconByPayMethod,
  getIconBySalesType,
  transactionStatusLang,
} from "@/modules/listTransactions/components/table/rows/utils";
import { useTranslations } from "@/hooks/useTranslations";
import { PaymentMethod } from "@/services/transactions/transactions.enum";

function TableRow({ transaction, index, onSelect }: RowProps) {
  const isSuccessful = transaction.status === "SUCCESSFUL";
  const t = useTranslations();
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
          {getIconBySalesType({ salesType: transaction.salesType })}{" "}
          <span>
            {t(transactionStatusLang({ transaction: transaction.status }))}
          </span>
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
          {getIconByPayMethod({ payMethod: transaction.paymentMethod })}
          <span>
            {transaction.paymentMethod === PaymentMethod.PSE
              ? transaction.paymentMethod
              : `**** ${transaction.transactionReference}`}
          </span>
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
              {t("listTransactions.listRow.header.rows.deduction")}
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
