import { useState } from "react";
import { className } from "./style";
import { TABS_NAME } from "./constanst";
import { useTranslations } from "@/hooks/useTranslations";

export default function DateTabs() {
  const [activeTab, setActiveTab] = useState(TABS_NAME[0].value);
  const t = useTranslations();
  return (
    <div className={className.container}>
      <div className={className.tabsWrapper}>
        {TABS_NAME.map(({ value, name }) => {
          const isActive = activeTab === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setActiveTab(value)}
              className={`${className.tab} ${isActive ? className.tabActive : className.tabInactive}`}
            >
              {t(name)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
