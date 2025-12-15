import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TableRow from "@/modules/listTransactions/components/table/rows";
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

describe("rows", () => {
  it("should render row with transaction data", () => {
    const onSelect = vi.fn();

    render(
      <table>
        <tbody>
          <TableRow
            transaction={mockTransaction}
            index={0}
            onSelect={onSelect}
          />
        </tbody>
      </table>,
      { wrapper: Wrapper },
    );

    expect(screen.getByText(mockTransaction.id)).toBeTruthy();
  });
});
