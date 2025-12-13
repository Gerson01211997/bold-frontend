import { useState } from "react";
import FilterButton from "@/modules/listTransactions/components/filters/components/filterButton"

const tabs = [
  { id: "hoy", label: "Hoy" },
  { id: "estaSemana", label: "Esta semana" },
  { id: "junio", label: "Junio" },
];

export default function DateTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      <div className="flex gap-8 rounded-xl bg-white px-4 py-2 shadow-sm">
        {tabs.map(({ id, label }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`
                flex-1
                rounded-2xl
                px-3
                py-1
                text-center
                text-sm
                font-medium
                text-gray-500
                transition-colors
                duration-200
                focus:outline-none
                ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
      <FilterButton/>
    </div>
  );
}
