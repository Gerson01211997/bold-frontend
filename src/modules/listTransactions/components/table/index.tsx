"use client";

import { useTransactions } from "@/services/transactions/hooks/useGetTransaction";
import { useState } from "react";
import SidePanel from "../sidePanel";
import { className } from "./style";
import TableHeader from "./tableHeader";
import TableRow from "./rows";
import type { Transaction } from "@/services/transactions/transactions.types";

export default function TransactionTable() {
  const { data, loading } = useTransactions();
  const [selected, setSelected] = useState<Transaction | null>(null);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <div className={className.container}>
        <table className={className.table}>
          <TableHeader />
          <tbody>
            {data.map((tx, index) => (
              <TableRow
                key={tx.id}
                transaction={tx}
                index={index}
                onSelect={setSelected}
              />
            ))}
          </tbody>
        </table>
      </div>

      <SidePanel
        isOpen={Boolean(selected)}
        transaction={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
