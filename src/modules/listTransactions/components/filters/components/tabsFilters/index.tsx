import { useState } from "react";
import { className } from "./style";

const tabs = [
  { id: "hoy", label: "Hoy" },
  { id: "estaSemana", label: "Esta semana" },
  { id: "junio", label: "Junio" },
];

export default function DateTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={className.container}>
      <div className={className.tabsWrapper}>
        {tabs.map(({ id, label }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`${className.tab} ${isActive ? className.tabActive : className.tabInactive}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
