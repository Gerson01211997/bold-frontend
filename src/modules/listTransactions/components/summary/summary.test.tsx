import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ShowTotal from "@/modules/listTransactions/components/summary";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("summary", () => {
  it("should render total amount and date", () => {
    const { container } = render(<ShowTotal />, { wrapper: Wrapper });
    const amountElement = container.querySelector(".text-2xl.font-bold");
    expect(amountElement).toBeTruthy();
    const dateElement = container.querySelector(".font-medium.text-gray-500");
    expect(dateElement).toBeTruthy();
  });
});
