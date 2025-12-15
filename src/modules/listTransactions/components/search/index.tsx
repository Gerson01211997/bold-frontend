"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import type { ChangeEvent } from "react";
import { className } from "@/modules/listTransactions/components/search/style";
import { useTransactionsContext } from "@/modules/listTransactions/context/TransactionsContext";
import { useTranslations } from "@/hooks/useTranslations";

export default function SearchInput() {
  const t = useTranslations();
  const { search, setSearch } = useTransactionsContext();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className={className.container}>
      <SearchIcon className="h-5 w-5 text-bold-gray" />
      <input
        type="text"
        placeholder={t("listTransactions.listRow.header.search")}
        value={search}
        onChange={handleSearchChange}
        className={className.input}
        aria-label="Buscar transacciones"
      />
    </div>
  );
}
