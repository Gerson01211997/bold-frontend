"use client";

import { memo, useState } from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import IconFilter from "@/components/icons/IconFilter";
import { className } from "@/modules/listTransactions/components/filters/components/filterButton/style";
import type { SalesType } from "@/services/transactions/transactions.enum";
import { useTransactionsContext } from "@/modules/listTransactions/context/TransactionsContext";
import { useTranslations } from "@/hooks/useTranslations";
import { OPTIONS } from "@/modules/listTransactions/components/filters/components/filterButton/constants";

function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { salesType, setSalesType } = useTransactionsContext();
  const t = useTranslations();
  const [selection, setSelection] = useState<SalesType[]>(
    () => (salesType ?? []) as SalesType[],
  );

  const allValues = OPTIONS.filter((o) => o.value !== null).map(
    (o) => o.value as SalesType,
  );

  const isAllSelected =
    allValues.length > 0 && allValues.every((v) => selection.includes(v));

  const handleCheckboxChange = (value: SalesType | null) => {
    if (value === null) {
      setSelection(() => (isAllSelected ? [] : allValues));
      return;
    }

    setSelection((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleApply = () => setIsOpen(false);

  const options = OPTIONS.map((option) => (
    <div key={option.id} className={className.checkboxWrapper}>
      <input
        type="checkbox"
        id={`filter-${option.id}`}
        checked={
          option.value === null
            ? isAllSelected
            : selection.includes(option.value as SalesType)
        }
        onChange={() => handleCheckboxChange(option.value)}
        className={className.checkbox}
      />
      <label htmlFor={`filter-${option.id}`} className={className.label}>
        {t(option.labelKey)}
      </label>
    </div>
  ));

  return (
    <div className={className.wrapper}>
      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => {
            const next = !prev;
            if (next) setSelection((salesType ?? []) as SalesType[]);
            return next;
          });
        }}
        className={className.button}
      >
        <span className={className.buttonText}>
          {t("listTransactions.listRow.filters.button")}
        </span>
        <IconFilter className="h-5 w-5 stroke-bold-blue" />
      </button>

      <div
        className={`${className.dropdown} ${isOpen ? className.dropdownOpen : className.dropdownClosed}`}
      >
        <div className={className.header}>
          <h2 className={className.headerTitle}>
            {t("listTransactions.listRow.filters.title")}
          </h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={className.closeButton}
            aria-label={t("listTransactions.listRow.filters.title")}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className={className.content}>
          {options}

          <button
            type="button"
            onClick={() => {
              setSalesType(selection.length ? (selection as string[]) : null);
              handleApply();
            }}
            disabled={selection.length === 0}
            className={`${className.applyButton} bg-bold-red ${selection.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:brightness-95"}`}
          >
            {t("listTransactions.listRow.filters.apply")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(FilterButton);
