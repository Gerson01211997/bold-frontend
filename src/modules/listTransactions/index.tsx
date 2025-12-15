"use client";
import ShowTotal from "./components/summary";
import Filters from "./components/filters";
import { className } from "./styles";
import ListRowHeader from "./components/salesHeader";
import TransactionTable from "./components/table";
import SearchInput from "./components/search";

function ListTransactions() {
  return (
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
  );
}

export default ListTransactions;
