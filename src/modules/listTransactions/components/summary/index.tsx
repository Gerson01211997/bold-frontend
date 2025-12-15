"use client";

import { memo } from "react";
import Skeleton from "@/components/Skeleton";
import InfoIcon from "@/components/icons/InfoIcon";
import { useTranslations } from "@/hooks/useTranslations";
import { className } from "@/modules/listTransactions/components/summary/style";
import { useTransactionsContext } from "@/modules/listTransactions/context/TransactionsContext";
import { formatCOP } from "@/lib/formatCurrency";
import { formatTransactionDate } from "@/lib/formatDateTime";

function ShowTotal() {
  const t = useTranslations();
  const { dateRange, total, loading } = useTransactionsContext();

  const formattedDate = formatTransactionDate(dateRange);

  const dateLabel = dateRange ? t(`common.${dateRange}`) : t("common.today");

  return (
    <div className={className.container}>
      <div className={className.header}>
        {t("listTransactions.listRow.header.title", {
          date: dateLabel,
        })}
        <div className="relative group">
          <InfoIcon className={className.infoIcon} />
          <div className={className.tooltip}>
            {t("listTransactions.summary.tooltip", {
              amount: formatCOP(total),
            })}
          </div>
        </div>
      </div>
      {loading ? (
        <span className={className.amount}>
          <Skeleton className="w-50" />
        </span>
      ) : (
        <span className={className.amount}>{formatCOP(total)}</span>
      )}
      <span className={className.date}>{formattedDate}</span>
    </div>
  );
}

export default memo(ShowTotal);
