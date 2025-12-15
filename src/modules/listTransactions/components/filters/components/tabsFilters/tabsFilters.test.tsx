import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DateTabs from "@/modules/listTransactions/components/filters/components/tabsFilters";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("tabsFilters", () => {
  it("should render date tabs", () => {
    render(<DateTabs />, { wrapper: Wrapper });

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
