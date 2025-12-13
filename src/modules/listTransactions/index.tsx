"use client";
import ShowTotal from "./components/totalSells";
import ListRow from "./components/ListRow";
import Filters from "./components/filters";

function ListTransactions() {
  return (
    <section className="w-full p-10 flex items-center flex-col gap-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-4">
        <ShowTotal />
        <Filters />
      </div>
      <ListRow />
    </section>
  );
}

export default ListTransactions;
