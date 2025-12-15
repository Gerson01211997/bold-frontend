"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { type ChangeEvent, useState } from "react";
import { className } from "./style";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={className.container}>
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={handleSearchChange}
        className={className.input}
        aria-label="Buscar transacciones"
      />
    </div>
  );
}
