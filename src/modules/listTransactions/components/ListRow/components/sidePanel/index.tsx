"use client";

import ChainsIcon from "@/components/icons/ChainsIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { memo, useState } from "react";

const transactionData = {
  monto: "$100.000",
  fechaHora: "27/06/2024 - 16:29:01",
  idTransaccion: "GZENU8IIRFKCI",
  deduccion: "-$3.000",
  metodoPago: "**** 7711",
  tipoPago: "Link de pagos",
};

function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const closePanel = () => setIsOpen(false);
  const openPanel = () => setIsOpen(true);

  const handleOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      closePanel();
    }
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closePanel();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closePanel();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openPanel}
        className="p-4 bg-indigo-600 text-white rounded-lg m-10"
      >
        Abrir Detalle de Transacción
      </button>

      {isOpen && (
        <button
          type="button"
          onClick={handleOverlayClick}
          onKeyDown={handleOverlayKeyDown}
          className="fixed inset-0 z-40 bg-black/60 "
          aria-label="Cerrar panel"
        />
      )}

      <div
        onKeyDown={handleKeyDown}
        className={`
          fixed z-50 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out
          w-full 
          
          bottom-0 left-0 
          h-[80vh] 
          rounded-t-2xl 
          ${isOpen ? "translate-y-0" : "translate-y-full"}
          
          
          md:top-0 md:right-0 
          md:bottom-auto md:left-auto
          md:h-full md:max-w-md 
          md:rounded-l-3xl md:rounded-tr-none
          
          md:translate-y-0 
          
          ${isOpen ? "md:translate-x-0" : "md:translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        <div className="flex justify-end px-4 py-4">
          <button
            type="button"
            onClick={closePanel}
            className="rounded-lg p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Cerrar"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="px-8 pt-0 pb-12 overflow-y-auto h-[calc(100%-60px)]">
          <div className="text-center  pb-8 mb-8">
            <div className="flex justify-center mb-6">
              <CheckIcon className="h-8 w-8 text-green-500" />
            </div>
            <h2
              id="panel-title"
              className="text-xl font-semibold text-gray-800 mb-2"
            >
              ¡Cobro exitoso!
            </h2>
            <p className="text-4xl font-bold text-bold-blue mb-2">
              {transactionData.monto}
            </p>
            <p className="text-sm text-bold-gray">
              {transactionData.fechaHora}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-bold-gray">ID transacción Bold</span>
              <span className="font-medium text-gray-900">
                {transactionData.idTransaccion}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-bold-gray">Deducción Bold</span>
              <span className="font-medium text-bold-red">
                {transactionData.deduccion}
              </span>
            </div>

            <div className="border-t border-gray-400 "></div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-bold-gray">Método de pago</span>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">
                  {transactionData.metodoPago}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-bold-gray">Tipo de pago</span>
              <div className="flex items-center space-x-2">
                <ChainsIcon className="h-4 w-4 text-bold-gray" />
                <span className="font-medium text-gray-900">
                  {transactionData.tipoPago}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SidePanel);
