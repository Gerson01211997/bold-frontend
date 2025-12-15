export const className = {
  container:
    "flex items-center flex-col gap-4 rounded-2xl w-full bg-white shadow-md pb-3",
  header:
    "flex justify-between items-center flex-row bg-bold-gradient p-3 rounded-t-2xl w-full text-sm font-medium text-white",
  amount: "text-2xl font-bold bg-bold-gradient bg-clip-text text-transparent",
  date: "font-medium text-gray-500",
  tooltip:
    "absolute left-1/2 top-full z-10 mt-2 w-max max-w-[90vw] min-w-[150px] -translate-x-1/2 rounded-md bg-gray-900 text-xs text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg",
} as const;
