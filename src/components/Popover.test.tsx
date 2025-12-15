import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Popover from "@/components/Popover";

describe("Popover", () => {
  it("should render popover component", () => {
    render(<Popover info="Test info" />);
    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("should show info when clicked", async () => {
    const user = userEvent.setup();
    render(<Popover info="Test info text" />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(screen.getByText("Test info text")).toBeTruthy();
  });

  it("should hide info when clicked again", async () => {
    const user = userEvent.setup();
    render(<Popover info="Test info" />);
    const button = screen.getByRole("button");

    await user.click(button);
    await user.click(button);

    expect(screen.queryByText("Test info")).toBeNull();
  });

  it("should hide info when clicking outside", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Popover info="Test info" />
        <div>Outside</div>
      </div>,
    );
    const button = screen.getByRole("button");

    await user.click(button);
    expect(screen.getByText("Test info")).toBeTruthy();

    await user.click(screen.getByText("Outside"));
    expect(screen.queryByText("Test info")).toBeNull();
  });
});
