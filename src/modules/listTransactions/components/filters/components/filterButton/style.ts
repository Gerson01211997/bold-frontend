export const className = {
  wrapper: "relative self-end",
  button: `
    flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-sm
    transition-all duration-200 hover:shadow-md
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300
  `,
  buttonText: "text-sm font-medium text-gray-900",
  dropdown: `
    absolute right-0 top-0 z-50
    w-full min-w-[280px]
    rounded-2xl bg-white shadow-2xl
    transform transition-all duration-300 ease-in-out
  `,
  dropdownOpen: "opacity-100 scale-100 translate-y-0",
  dropdownClosed: "opacity-0 scale-95 -translate-y-2 pointer-events-none",
  header:
    "flex items-center justify-between border-b border-gray-200 px-6 py-4",
  headerTitle: "text-lg font-semibold text-gray-900",
  closeButton:
    "rounded-lg p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600",
  content: "px-6 py-6 space-y-4",
  checkboxWrapper: "flex items-center gap-3",
  checkbox:
    "h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  label: "text-sm font-medium text-gray-700",
  applyButton:
    "w-full rounded-xl bg-pink-200 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 active:bg-pink-400",
};
