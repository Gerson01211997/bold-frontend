import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterButton from "@/modules/listTransactions/components/filters/components/filterButton";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("filterButton", () => {
  it("should open and close filter dropdown", async () => {
    const user = userEvent.setup();
    render(<FilterButton />, { wrapper: Wrapper });

    const buttons = screen.getAllByRole("button", { name: /filtrar/i });
    const mainButton = buttons[0];
    await user.click(mainButton);

    const applyButton = screen.getByText("Aplicar");
    expect(applyButton).toBeTruthy();
  });
});
