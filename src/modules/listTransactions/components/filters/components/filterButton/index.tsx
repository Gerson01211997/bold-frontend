"use client";

import { useState } from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import IconFilter from "@/components/icons/IconFilter";
import { className } from "./style";

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useState({
    dataphone: false,
    paymentLink: false,
    all: false,
  });

  const handleCheckboxChange = (filterKey: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <div className={className.wrapper}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={className.button}
      >
        <span className={className.buttonText}>Filtrar</span>
        <IconFilter className="h-5 w-5 stroke-bold-blue" />
      </button>

      <div
        className={`${className.dropdown} ${isOpen ? className.dropdownOpen : className.dropdownClosed}`}
      >
        <div className={className.header}>
          <h2 className={className.headerTitle}>Filtrar</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={className.closeButton}
            aria-label="Cerrar"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className={className.content}>
          <div className={className.checkboxWrapper}>
            <input
              type="checkbox"
              id="filter-dataphone"
              checked={filters.dataphone}
              onChange={() => handleCheckboxChange("dataphone")}
              className={className.checkbox}
            />
            <label htmlFor="filter-dataphone" className={className.label}>
              Cobro con datáfono
            </label>
          </div>

          <div className={className.checkboxWrapper}>
            <input
              type="checkbox"
              id="filter-payment-link"
              checked={filters.paymentLink}
              onChange={() => handleCheckboxChange("paymentLink")}
              className={className.checkbox}
            />
            <label htmlFor="filter-payment-link" className={className.label}>
              Cobro con link de pago
            </label>
          </div>

          <div className={className.checkboxWrapper}>
            <input
              type="checkbox"
              id="filter-all"
              checked={filters.all}
              onChange={() => handleCheckboxChange("all")}
              className={className.checkbox}
            />
            <label htmlFor="filter-all" className={className.label}>
              Ver todos
            </label>
          </div>

          <button
            type="button"
            onClick={handleApply}
            className={className.applyButton}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
