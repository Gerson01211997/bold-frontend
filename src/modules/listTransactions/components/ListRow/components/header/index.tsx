"use client";
import { useTranslations } from "@/hooks/useTranslations";
export function ListRowHeader() {
    const t = useTranslations();

    return (
        <div className="bg-bold-gradient p-3 rounded-t-2xl w-full">
            <span className="text-sm font-medium text-white">{t("listTransactions.listRow.header.title", { date: t("common.today") })}</span>
        </div>
    );
}