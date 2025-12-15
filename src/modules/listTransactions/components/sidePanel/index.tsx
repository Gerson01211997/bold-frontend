"use client";

import ChainsIcon from "@/components/icons/ChainsIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { memo } from "react";
import { className } from "./style";

type Transaction = {
  id: string;
  status: string;
  date: string;
  time: string;
  paymentMethod: string;
  amount: string;
  deduction: string | null;
};

type SidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
};

function SidePanel({ isOpen, onClose, transaction }: SidePanelProps) {
  const isSuccessful = transaction?.status === "Cobro exitoso";
  const fechaHora = transaction
    ? `${transaction.date} - ${transaction.time}`
    : "";
  const monto = transaction ? `$${transaction.amount}` : "";
  const deduccion = transaction?.deduction
    ? `-$${transaction.deduction}`
    : null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOverlayClick}
        onKeyDown={handleOverlayKeyDown}
        className={className.overlay(isOpen, !!transaction)}
        aria-label="Cerrar panel"
      />

      <div
        onKeyDown={handleKeyDown}
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
                {isSuccessful ? "¡Cobro exitoso!" : "Cobro no realizado"}
              </h2>
              <p className={className.amount}>{monto}</p>
              <p className={className.date}>{fechaHora}</p>
            </div>

            <div className={className.details}>
              <div className={className.detailRow}>
                <span className={className.detailLabel}>
                  ID transacción Bold
                </span>
                <span className={className.detailValue}>{transaction.id}</span>
              </div>

              {deduccion && (
                <div className={className.detailRow}>
                  <span className={className.detailLabel}>Deducción Bold</span>
                  <span className={className.deductionValue}>{deduccion}</span>
                </div>
              )}

              <div className={className.divider}></div>
              <div className={className.detailRow}>
                <span className={className.detailLabel}>Método de pago</span>
                <div className={className.paymentMethodRow}>
                  <span className={className.detailValue}>
                    {transaction.paymentMethod}
                  </span>
                </div>
              </div>

              <div className={className.detailRow}>
                <span className={className.detailLabel}>Tipo de pago</span>
                <div className={className.paymentMethodRow}>
                  <ChainsIcon className="h-4 w-4 text-bold-gray" />
                  <span className={className.detailValue}>
                    {transaction.paymentMethod.includes("****")
                      ? "Tarjeta"
                      : "PSE"}
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
