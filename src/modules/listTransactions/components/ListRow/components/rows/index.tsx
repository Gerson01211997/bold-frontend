"use client";

import { memo, useState } from "react";
import TerminalIcon from "@/components/icons/TerminalIcon";
import SidePanel from "@/modules/listTransactions/components/ListRow/components/sidePanel";
import { className } from "./style";

// --- Datos de Ejemplo para la Tabla ---
const transactions = [
  {
    id: "GZENBW2BAX9W",
    status: "Cobro no realizado",
    date: "14/6/2024",
    time: "16:16:00",
    paymentMethod: "**** 6544", // Aquí iría un ícono
    amount: "180.000",
    deduction: null,
  },
  {
    id: "GZENH96WDV96V",
    status: "Cobro exitoso",
    date: "13/6/2024",
    time: "2:43:24",
    paymentMethod: "PSE", // Aquí iría un ícono
    amount: "80.000",
    deduction: "2.400",
  },
  {
    id: "GZENMQICQZFN8Y",
    status: "Cobro exitoso",
    date: "14/6/2024",
    time: "3:42:31",
    paymentMethod: "**** 1214", // Aquí iría un ícono
    amount: "90.000",
    deduction: "2.700",
  },
  {
    id: "GZENW805EHB4O",
    status: "Cobro exitoso",
    date: "14/6/2024",
    time: "16:16:00",
    paymentMethod: "**** 4324", // Aquí iría un ícono
    amount: "122.200",
    deduction: "3.666",
  },
  {
    id: "GZEN27LEMU2D6",
    status: "Cobro no realizado",
    date: "14/6/2024",
    time: "16:16:00",
    paymentMethod: "**** 7657", // Aquí iría un ícono
    amount: "80.000",
    deduction: null,
  },
  {
    id: "GZENMYUSHOBF6",
    status: "Cobro exitoso",
    date: "14/6/2024",
    time: "3:42:31",
    paymentMethod: "**** 8796", // Aquí iría un ícono
    amount: "1'155.500",
    deduction: "34.665",
  },
  {
    id: "GZENUBIIRFKCI",
    status: "Cobro no realizado",
    date: "14/6/2024",
    time: "16:16:00",
    paymentMethod: "PSE", // Aquí iría un ícono
    amount: "100.000",
    deduction: null,
  },
];

const PlaceholderIcon = memo(({ size = 4 }: { size?: number }) => (
  <div
    className={
      size === 6
        ? className.placeholderIcon.size6
        : className.placeholderIcon.size4
    }
    aria-hidden="true"
  />
));

export default function TransactionTable() {
  const [selectedTransaction, setSelectedTransaction] = useState<
    (typeof transactions)[0] | null
  >(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRowClick = (tx: (typeof transactions)[0]) => {
    setSelectedTransaction(tx);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <>
      <div className={className.container}>
        <table className={className.table}>
          {/* --- Títulos (Header) --- */}
          <thead className={className.thead}>
            <tr>
              <th scope="col" className={className.thTransaction}>
                Transacción
              </th>
              <th scope="col" className={className.thDate}>
                Fecha y hora
              </th>
              <th scope="col" className={className.thPaymentMethod}>
                Método de pago
              </th>
              <th scope="col" className={className.thId}>
                ID transacción Bold
              </th>
              <th scope="col" className={className.thAmount}>
                Monto
              </th>
            </tr>
          </thead>

          {/* --- Cuerpo de la Tabla --- */}
          <tbody className={className.tbody}>
            {transactions.map((tx, index) => {
              const isSuccessful = tx.status === "Cobro exitoso";

              return (
                <tr
                  key={tx.id}
                  onClick={() => handleRowClick(tx)}
                  className={className.tr}
                  // Añadir un borde izquierdo sutil de color de marca
                  style={{
                    borderLeft: `4px solid ${index % 2 !== 0 ? "transparent" : "var(--bold-blue)"}`,
                  }}
                >
                  {/* Columna: Transacción */}
                  <td className={className.tdTransaction}>
                    <div className={className.tdTransactionContent}>
                      <TerminalIcon className="h-4 w-4" />
                      {/* <IconLink className="h-4 w-4"/> */}
                      <span>{tx.status}</span>
                    </div>
                  </td>

                  {/* Columna: Fecha y hora */}
                  <td className={className.tdDate}>
                    <div className={className.tdDateContent}>
                      <span className={className.tdDateMain}>{tx.date}</span>
                      <span className={className.tdDateSub}>{tx.time}</span>
                    </div>
                  </td>

                  {/* Columna: Método de pago */}
                  <td className={className.tdPaymentMethod}>
                    <div className={className.tdPaymentMethodContent}>
                      <PlaceholderIcon size={6} />{" "}
                      {/* Placeholder para ícono de Método de Pago */}
                      <span>{tx.paymentMethod}</span>
                    </div>
                  </td>

                  {/* Columna: ID transacción Bold */}
                  <td className={className.tdId}>{tx.id}</td>

                  {/* Columna: Monto y Deducción */}
                  <td className={className.tdAmount}>
                    <div className={className.tdAmountContent}>
                      {/* Monto principal */}
                      <span
                        className={
                          isSuccessful
                            ? className.amountSuccess
                            : className.amountFailed
                        }
                      >
                        ${tx.amount}
                      </span>

                      {/* Deducción (solo si existe y es exitoso) */}
                      {tx.deduction && (
                        <span className={className.deduction}>
                          Deducción Bold
                          <span className={className.deductionAmount}>
                            ${tx.deduction}
                          </span>
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <SidePanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        transaction={selectedTransaction}
      />
    </>
  );
}
