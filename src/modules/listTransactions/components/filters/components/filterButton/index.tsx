"use client";

import { useState } from "react";

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openPanel = () => setIsOpen(true);
  const closePanel = () => setIsOpen(false);

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
      {/* Botón de filtro */}
      <button
        type="button"
        onClick={openPanel}
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      >
        <span className="text-sm font-medium text-indigo-700">Filtrar</span>
        <svg
          className="h-4 w-4 text-indigo-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Icono de filtro"
        >
          <title>Icono de filtro</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          onClick={handleOverlayClick}
          onKeyDown={handleOverlayKeyDown}
          className=" fixed
  inset-0
  z-40
  bg-black/30
  backdrop-blur-sm"
          aria-label="Cerrar panel"
        />
      )}

      {/* Panel lateral */}
      <div
        onKeyDown={handleKeyDown}
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 id="panel-title" className="text-xl font-semibold text-gray-900">
            Filtrar
          </h2>
          <button
            type="button"
            onClick={closePanel}
            className="rounded-lg p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Cerrar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Cerrar panel"
            >
              <title>Cerrar panel</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido del panel */}
        <div className="px-6 py-6">
          <div className="mb-6 space-y-4">
            <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50">
              <input
                type="checkbox"
                id="filter-dataphone"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
              <label
                htmlFor="filter-dataphone"
                className="cursor-pointer text-sm font-medium text-gray-700"
              >
                Cobro con datáfono
              </label>
            </div>

            <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50">
              <input
                type="checkbox"
                id="filter-payment-link"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
              <label
                htmlFor="filter-payment-link"
                className="cursor-pointer text-sm font-medium text-gray-700"
              >
                Cobro con link de pago
              </label>
            </div>

            <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50">
              <input
                type="checkbox"
                id="filter-all"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
              <label
                htmlFor="filter-all"
                className="cursor-pointer text-sm font-medium text-gray-700"
              >
                Ver todos
              </label>
            </div>
          </div>

          {/* Botón aplicar */}
          <button
            type="button"
            onClick={closePanel}
            className="w-full rounded-xl bg-pink-200 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 active:bg-pink-400"
          >
            Aplicar
          </button>
        </div>
      </div>
    </>
  );
}
