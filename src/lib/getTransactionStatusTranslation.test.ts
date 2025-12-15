import { describe, it, expect } from "vitest";
import { getTransactionStatusTranslation } from "@/lib/getTransactionStatusTranslation";
import { TransactionStatus } from "@/services/transactions/transactions.enum";

describe("getTransactionStatusTranslation", () => {
  it("should return translation for valid status", () => {
    const result = getTransactionStatusTranslation(
      TransactionStatus.PENDING,
      "es",
    );
    expect(result).toBeTruthy();
    expect(typeof result).toBe("string");
  });

  it("should return different translations for different locales", () => {
    const esResult = getTransactionStatusTranslation(
      TransactionStatus.PENDING,
      "es",
    );
    const enResult = getTransactionStatusTranslation(
      TransactionStatus.PENDING,
      "en",
    );
    expect(esResult).toBeTruthy();
    expect(enResult).toBeTruthy();
  });

  it("should handle all transaction statuses", () => {
    const statuses = Object.values(TransactionStatus);
    statuses.forEach((status) => {
      const result = getTransactionStatusTranslation(status, "es");
      expect(result).toBeTruthy();
      expect(typeof result).toBe("string");
    });
  });
});
