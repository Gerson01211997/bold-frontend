import { memo } from "react";
import { className } from "@/modules/listTransactions/components/table/tableHeader/style";
import { TABLE_HEADER_TITLES } from "@/modules/listTransactions/components/table/tableHeader/constanst";
import { useTranslations } from "@/hooks/useTranslations";

function TableHeader() {
  const t = useTranslations();

  const headerTitles = TABLE_HEADER_TITLES.map(({ name }) => (
    <th key={name} scope="col" className={className.th}>
      {t(name)}
    </th>
  ));

  return (
    <thead className={className.thead}>
      <tr>{headerTitles}</tr>
    </thead>
  );
}

export default memo(TableHeader);
