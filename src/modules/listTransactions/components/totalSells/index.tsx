"use-client";

import { memo } from "react";
import InfoIcon from "@/components/icons/InfoIcon";
import { useTranslations } from "@/hooks/useTranslations";
import { formatCOP } from "@/lib/formatCurrency";

function ShowTotal() {
  const t = useTranslations();
  return (
    <div className="flex items-center flex-col gap-4 rounded-2xl w-full bg-white shadow-md pb-3">
      <div className="flex justify-between items-center flex-row bg-bold-gradient p-3 rounded-t-2xl  w-full text-sm font-medium text-white">
        {t("listTransactions.listRow.header.title", {
          date: t("common.today"),
        })}
        <InfoIcon className="w-4 h-auto text-white" />
      </div>
      <span className="text-2xl font-bold bg-bold-gradient bg-clip-text text-transparent">
        {formatCOP(394123123)}
      </span>
      <span className="font-medium text-gray-500">Junio, 2024</span>
    </div>
  );
}

export default memo(ShowTotal);
