import { memo } from "react";
import { className } from "./style";
import { TABLE_HEADER_TITLES } from "./constanst";
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
