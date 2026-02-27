import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/shared/ui/button";

describe("Button", () => {
  it("renders with visible text and minimum legible size class", () => {
    render(<Button variant="primary">Ver Plan</Button>);
    const button = screen.getByRole("button", { name: "Ver Plan" });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("text-base");
  });
});
