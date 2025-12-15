import {
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
  afterAll,
  vi,
} from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import {
  TransactionsProvider,
  useTransactionsContext,
} from "@/modules/listTransactions/context/TransactionsContext";
import { mockServer } from "@/services/mocks/server";
import { getAllTransactionsMock } from "@/services/transactions/hooks/getTransaction.msw";
import { generateMockData } from "@/services/transactions/hooks/mockData";
import { TranslationProvider } from "@/contexts/TranslationContext";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </TranslationProvider>
);

describe("TransactionsContext", () => {
  beforeAll(() => {
    mockServer.listen();
  });

  afterEach(() => {
    vi.clearAllMocks();
    mockServer.reset();
  });

  afterAll(() => {
    mockServer.close();
  });

  it("When get all list is successful", async () => {
    const mockData = generateMockData(5);
    mockServer.use(getAllTransactionsMock({ data: { data: mockData } }));

    const { result } = renderHook(() => useTransactionsContext(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeTruthy();
    expect(result.current.data.length).toBe(5);
    expect(result.current.filtered).toBeTruthy();
    expect(result.current.filteredWithoutSearch).toBeTruthy();
  });

  it("should provide search functionality", async () => {
    const mockData = generateMockData(3);
    mockServer.use(getAllTransactionsMock({ data: { data: mockData } }));

    const { result } = renderHook(() => useTransactionsContext(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(typeof result.current.setSearch).toBe("function");
    expect(result.current.search).toBe("");
  });

  it("should provide date range functionality", async () => {
    const mockData = generateMockData(3);
    mockServer.use(getAllTransactionsMock({ data: { data: mockData } }));

    const { result } = renderHook(() => useTransactionsContext(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(typeof result.current.setDateRange).toBe("function");
    expect(result.current.dateRange).toBeTruthy();
  });

  it("should calculate total", async () => {
    const mockData = generateMockData(3);
    mockServer.use(getAllTransactionsMock({ data: { data: mockData } }));

    const { result } = renderHook(() => useTransactionsContext(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(typeof result.current.total).toBe("number");
    expect(result.current.total).toBeGreaterThanOrEqual(0);
  });

  it("should throw error when used outside provider", () => {
    expect(() => {
      renderHook(() => useTransactionsContext());
    }).toThrow(
      "useTransactionsContext must be used within TransactionsProvider",
    );
  });
});
