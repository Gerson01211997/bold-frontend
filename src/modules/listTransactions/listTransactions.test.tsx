import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ListTransactions from "@/modules/listTransactions";
import { TranslationProvider } from "@/contexts/TranslationContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>{children}</TranslationProvider>
);

describe("listTransactions", () => {
  it("should render list transactions layout", () => {
    const { container } = render(<ListTransactions />, { wrapper: Wrapper });
    const section = container.querySelector("section");
    expect(section).toBeTruthy();
  });
});
