import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SidePanel from "@/modules/listTransactions/components/sidePanel";
import { TranslationProvider } from "@/contexts/TranslationContext";
import type { Transaction } from "@/services/transactions/transactions.types";
import {
  PaymentMethod,
  SalesType,
  TransactionStatus,
} from "@/services/transactions/transactions.enum";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>{children}</TranslationProvider>
);

const mockTransaction: Transaction = {
  id: "1",
  status: TransactionStatus.SUCCESSFUL,
  paymentMethod: PaymentMethod.CARD,
  salesType: SalesType.TERMINAL,
  createdAt: new Date().toISOString(),
  transactionReference: 123456,
  amount: 1000,
};

describe("sidePanel", () => {
  it("should render when open with transaction", () => {
    render(
      <SidePanel isOpen onClose={() => {}} transaction={mockTransaction} />,
      { wrapper: Wrapper },
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeTruthy();
  });
});
