"use-client";

import { memo } from "react";
import InfoIcon from "@/components/icons/InfoIcon";
import { useTranslations } from "@/hooks/useTranslations";
import { formatCOP } from "@/lib/formatCurrency";
import { className } from "./style";

function ShowTotal() {
  const t = useTranslations();
  return (
    <div className={className.container}>
      <div className={className.header}>
        {t("listTransactions.listRow.header.title", {
          date: t("common.today"),
        })}
        <InfoIcon className={className.infoIcon} />
      </div>
      <span className={className.amount}>{formatCOP(394123123)}</span>
      <span className={className.date}>Junio, 2024</span>
    </div>
  );
}

export default memo(ShowTotal);
