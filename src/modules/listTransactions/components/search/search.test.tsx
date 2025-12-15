import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchInput from "@/modules/listTransactions/components/search";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("search", () => {
  it("should render search input", () => {
    render(<SearchInput />, { wrapper: Wrapper });

    const input = screen.getByLabelText("Buscar transacciones");
    expect(input).toBeTruthy();
  });
});
