"use client";

import { useState, useEffect, useRef } from "react";
import CloseIcon from "@/components/icons/CloseIcon";

export default function FilterButton() {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [filters, setFilters] = useState({
        dataphone: false,
        paymentLink: false,
        all: false,
    });

    const openPopover = () => setIsOpen(true);
    const closePopover = () => setIsOpen(false);

    const handleCheckboxChange = (filterKey: keyof typeof filters) => {
        setFilters((prev) => ({
            ...prev,
            [filterKey]: !prev[filterKey],
        }));
    };

    const handleApply = () => {
        // Aquí puedes agregar la lógica para aplicar los filtros
        closePopover();
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (
                isOpen &&
                popoverRef.current &&
                buttonRef.current &&
                !popoverRef.current.contains(e.target as Node) &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative self-end">
            {/* Botón de filtro */}
            <button
                ref={buttonRef}
                type="button"
                onClick={openPopover}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
                <span className="text-sm font-medium text-gray-900">Filtrar</span>
                <svg
                    className="h-4 w-4 text-gray-900"
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

            {/* Popover */}
            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute right-0 top-full z-50 mt-2 w-full min-w-[280px] rounded-2xl bg-white shadow-2xl"
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="popover-title"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <h2
                            id="popover-title"
                            className="text-lg font-semibold text-gray-900"
                        >
                            Filtrar
                        </h2>
                        <button
                            type="button"
                            onClick={closePopover}
                            className="rounded-lg p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="Cerrar"
                        >
                            <CloseIcon className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Contenido del popover */}
                    <div className="px-6 py-6">
                        <div className="mb-6 space-y-4">
                            {/* Checkbox: Cobro con datáfono */}
                            <div className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="filter-dataphone"
                                    checked={filters.dataphone}
                                    onChange={() => handleCheckboxChange("dataphone")}
                                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                />
                                <label
                                    htmlFor="filter-dataphone"
                                    className="cursor-pointer text-sm font-medium text-gray-700"
                                >
                                    Cobro con datáfono
                                </label>
                            </div>

                            {/* Checkbox: Cobro con link de pago */}
                            <div className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="filter-payment-link"
                                    checked={filters.paymentLink}
                                    onChange={() => handleCheckboxChange("paymentLink")}
                                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                />
                                <label
                                    htmlFor="filter-payment-link"
                                    className="cursor-pointer text-sm font-medium text-gray-700"
                                >
                                    Cobro con link de pago
                                </label>
                            </div>

                            {/* Checkbox: Ver todos */}
                            <div className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="filter-all"
                                    checked={filters.all}
                                    onChange={() => handleCheckboxChange("all")}
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
                            onClick={handleApply}
                            className="w-full rounded-xl bg-pink-200 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 active:bg-pink-400"
                        >
                            Aplicar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
