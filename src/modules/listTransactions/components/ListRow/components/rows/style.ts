export const className = {
  container: "overflow-x-auto bg-white border-t border-t-bold-light-gray",
  table: "min-w-full divide-y divide-bold-light-gray",
  thead: "bg-white",
  th: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500",
  thTransaction:
    "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 w-[10%]",
  thDate:
    "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 w-[15%]",
  thPaymentMethod:
    "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 w-[20%]",
  thId: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 w-[30%]",
  thAmount:
    "px-4 py-2 text-right text-xs font-semibold uppercase tracking-wider text-gray-500 w-[25%]",
  tbody: "divide-y divide-gray-100",
  tr: "hover:bg-gray-50 transition-colors duration-100 cursor-pointer",
  tdTransaction:
    "px-4 py-4 whitespace-nowrap text-sm font-medium text-bold-blue",
  tdTransactionContent: "flex items-center space-x-2",
  tdDate: "px-4 py-4 whitespace-nowrap text-sm text-bold-gray",
  tdDateContent: "flex flex-col",
  tdDateMain: "font-medium",
  tdDateSub: "text-xs text-gray-500",
  tdPaymentMethod: "px-4 py-4 whitespace-nowrap text-sm text-bold-gray",
  tdPaymentMethodContent: "flex items-center space-x-2",
  tdId: "px-4 py-4 whitespace-nowrap text-sm text-bold-gray",
  tdAmount: "px-4 py-4 whitespace-nowrap text-sm text-right",
  tdAmountContent: "flex flex-col items-end",
  amountSuccess: "font-bold text-base text-bold-blue",
  amountFailed: "font-bold text-base text-bold-gray",
  deduction: "text-xs text-bold-red",
  deductionAmount: "ml-1 font-medium",
  placeholderIcon: {
    size4: "h-4 w-4 bg-bold-light-gray rounded-full",
    size6: "h-6 w-6 bg-bold-light-gray rounded-full",
  },
} as const;
