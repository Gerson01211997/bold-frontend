"use client";
import { useTranslations } from "@/hooks/useTranslations";
import { className } from "@/modules/listTransactions/components/salesHeader/style";

function ListRowHeader() {
  const t = useTranslations();

  return (
    <div className={className.container}>
      <span className={className.title}>
        {t("listTransactions.listRow.header.title", {
          date: t("common.today"),
        })}
      </span>
    </div>
  );
}

export default ListRowHeader;
