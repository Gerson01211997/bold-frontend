import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Filters from "@/modules/listTransactions/components/filters";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TransactionsProvider } from "@/modules/listTransactions/context/TransactionsContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("filters", () => {
  it("should render filters container", () => {
    const { container } = render(<Filters />, { wrapper: Wrapper });
    expect(container.firstChild).toBeTruthy();
  });
});
