import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TransactionTable from "@/modules/listTransactions/components/table";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("table", () => {
  it("should render table element", () => {
    render(<TransactionTable />, { wrapper: Wrapper });

    const table = screen.getByRole("table");
    expect(table).toBeTruthy();
  });
});
