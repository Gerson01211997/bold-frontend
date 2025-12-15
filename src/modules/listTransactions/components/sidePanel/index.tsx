"use client";

import ChainsIcon from "@/components/icons/ChainsIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { memo } from "react";
import { className } from "./style";
import type { Transaction } from "@/services/transactions/transactions.types";
import { formatDateTime } from "@/lib/formatDateTime";
import {
  PaymentMethod,
  TransactionStatus,
} from "@/services/transactions/transactions.enum";
import {
  getIconByPayMethod,
  getIconBySalesType,
  transactionStatusLang,
} from "../table/rows/utils";
import { useTranslations } from "@/hooks/useTranslations";
import { formatCOP } from "@/lib/formatCurrency";
import { generateTypePay } from "./utils";

type SidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
};

function SidePanel({ isOpen, onClose, transaction }: SidePanelProps) {
  const isSuccessful = transaction?.status === TransactionStatus.SUCCESSFUL;
  const t = useTranslations();
  const fechaHora = transaction ? formatDateTime(transaction.createdAt) : "";
  const monto = transaction ? `${formatCOP(transaction.amount)}` : "";
  const deduccion = transaction?.deduction
    ? `-${formatCOP(transaction?.deduction)}`
    : null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOverlayClick}
        className={className.overlay(isOpen, !!transaction)}
        aria-label="Cerrar panel"
      />

      <div
        className={className.panel(isOpen, !!transaction)}
        role="dialog"
        aria-modal={isOpen && transaction ? "true" : "false"}
        aria-labelledby="panel-title"
      >
        <div className={className.closeButtonContainer}>
          <button
            type="button"
            onClick={onClose}
            className={className.closeButton}
            aria-label="Cerrar"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {transaction && (
          <div className={className.content}>
            <div className={className.header}>
              <div className={className.iconContainer}>
                {isSuccessful ? (
                  <CheckIcon className="h-8 w-8 text-green-500" />
                ) : (
                  <CloseIcon className="h-8 w-8 text-red-500" />
                )}
              </div>
              <h2 id="panel-title" className={className.title}>
                {t(transactionStatusLang({ transaction: transaction?.status }))}
              </h2>
              <p className={className.amount}>{monto}</p>
              <p className={className.date}>{fechaHora}</p>
            </div>

            <div className={className.details}>
              <div className={className.detailRow}>
                <span className={className.detailLabel}>
                  {t("listTransactions.listRow.header.cols.idTransaction")}
                </span>
                <span className={className.textBlack}>{transaction.id}</span>
              </div>

              {deduccion && (
                <div className={className.detailRow}>
                  <span className={className.detailLabel}>
                    {t("listTransactions.listRow.header.rows.deduction")}
                  </span>
                  <span className={className.deductionValue}>{deduccion}</span>
                </div>
              )}

              <div className={className.divider}></div>
              <div className={className.detailRow}>
                <span className={className.detailLabel}>
                  {t("listTransactions.listRow.header.cols.payMethod")}
                </span>
                <div className={className.paymentMethodRow}>
                  {getIconByPayMethod({ payMethod: transaction.paymentMethod })}
                  <span className={className.detailValue}>
                    {transaction.paymentMethod === PaymentMethod.PSE
                      ? transaction.paymentMethod
                      : `**** ${transaction.transactionReference}`}
                  </span>
                </div>
              </div>

              <div className={className.detailRow}>
                <span className={className.detailLabel}>
                  {t("listTransactions.listRow.header.rows.typeMethod")}
                </span>
                <div className={className.paymentMethodRow}>
                  {getIconBySalesType({ salesType: transaction.salesType })}
                  <span className={className.textBlack}>
                    {t(generateTypePay({ salesType: transaction.salesType }))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default memo(SidePanel);
