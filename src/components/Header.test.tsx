import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/Header";
import { TranslationProvider } from "@/contexts/TranslationContext";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TranslationProvider>{children}</TranslationProvider>
);

describe("Header", () => {
  it("should render header component", () => {
    render(<Header />, { wrapper });
    expect(screen.getByRole("navigation")).toBeTruthy();
  });

  it("should render logo", () => {
    const { container } = render(<Header />, { wrapper });
    const logo = container.querySelector("svg");
    expect(logo).toBeTruthy();
  });

  it("should toggle mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />, { wrapper });
    const button = screen.getByLabelText(/abrir menú/i);

    await user.click(button);

    const menu = screen.getByRole("navigation").querySelector(".max-h-40");
    expect(menu).toBeTruthy();
  });

  it("should render language switcher", () => {
    render(<Header />, { wrapper });
    const esButtons = screen.getAllByText("ES");
    const enButtons = screen.getAllByText("EN");
    expect(esButtons.length).toBeGreaterThan(0);
    expect(enButtons.length).toBeGreaterThan(0);
  });
});
