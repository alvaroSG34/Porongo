import { expect, test } from "@playwright/test";

test("landing renders hero and proposals", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Dra. Marisol/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Un Plan Real para Todos/i })).toBeVisible();
});

test("tab interaction works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Economía" }).click();
  await expect(page.getByText(/Economía · Propuesta Activa/i)).toBeVisible();
});
