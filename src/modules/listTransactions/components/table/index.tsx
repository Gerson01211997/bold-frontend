"use client";

import { useState, useMemo } from "react";
import { useTransactionsContext } from "@/modules/listTransactions/context/TransactionsContext";
import SidePanel from "@/modules/listTransactions/components/sidePanel";
import { className } from "@/modules/listTransactions/components/table/style";
import TableHeader from "@/modules/listTransactions/components/table/tableHeader";
import TableRow from "@/modules/listTransactions/components/table/rows";
import type { Transaction } from "@/services/transactions/transactions.types";
import { useTranslations } from "@/hooks/useTranslations";
import TableSkeleton from "@/modules/listTransactions/components/table/TableSkeleton";

export default function TransactionTable() {
  const t = useTranslations();
  const { filtered, loading } = useTransactionsContext();
  const [selected, setSelected] = useState<Transaction | null>(null);

  const rows = useMemo(() => {
    if (loading) {
      const skeletonKeys = ["skel-a", "skel-b", "skel-c", "skel-d", "skel-e"];
      return skeletonKeys.map((key) => <TableSkeleton key={key} />);
    }

    if (filtered.length === 0) {
      return (
        <tr>
          <td colSpan={6} className={className.emptyState}>
            {t("listTransactions.listRow.emptyState.title")}
          </td>
        </tr>
      );
    }

    return filtered.map((tx, index) => (
      <TableRow
        key={tx.id}
        transaction={tx}
        index={index}
        onSelect={setSelected}
      />
    ));
  }, [loading, filtered, t]);

  return (
    <>
      <div className={className.container}>
        <table className={className.table}>
          <TableHeader />
          <tbody>{rows}</tbody>
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
