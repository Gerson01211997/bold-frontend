import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TableHeader from "@/modules/listTransactions/components/table/tableHeader";
import { TranslationProvider } from "@/contexts/TranslationContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>{children}</TranslationProvider>
);

describe("tableHeader", () => {
  it("should render table header", () => {
    render(
      <table>
        <TableHeader />
      </table>,
      { wrapper: Wrapper },
    );

    const headers = screen.getAllByRole("columnheader");
    expect(headers.length).toBeGreaterThan(0);
  });
});
