import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ListRowHeader from "@/modules/listTransactions/components/salesHeader";
import { TranslationProvider } from "@/contexts/TranslationContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>{children}</TranslationProvider>
);

describe("salesHeader", () => {
  it("should render header title", () => {
    render(<ListRowHeader />, { wrapper: Wrapper });

    const header = screen.getByText((content) => content.length > 0);
    expect(header).toBeTruthy();
  });
});
