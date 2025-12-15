import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import TableSkeleton from "@/modules/listTransactions/components/table/TableSkeleton";

describe("TableSkeleton", () => {
  it("should render skeleton row", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableSkeleton />
        </tbody>
      </table>,
    );

    expect(container.querySelectorAll("tr").length).toBe(1);
  });
});
