"use client";

import ShowTotal from "@/modules/listTransactions/components/summary";
import Filters from "@/modules/listTransactions/components/filters";
import { className } from "@/modules/listTransactions/styles";
import ListRowHeader from "@/modules/listTransactions/components/salesHeader";
import TransactionTable from "@/modules/listTransactions/components/table";
import SearchInput from "@/modules/listTransactions/components/search";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";
import { Suspense } from "react";

function ListTransactions() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <TransactionsProvider>
        <section className={className.container}>
          <div className={className.containerSummary}>
            <ShowTotal />
            <Filters />
          </div>
          <div className={className.containerTable}>
            <ListRowHeader />
            <SearchInput />
            <TransactionTable />
          </div>
        </section>
      </TransactionsProvider>
    </Suspense>
  );
}

export default ListTransactions;
