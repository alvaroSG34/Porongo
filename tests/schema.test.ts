import { describe, expect, it } from "vitest";
import landingJson from "@/content/landing.json";
import { landingContentSchema } from "@/content/schema";

describe("landing content schema", () => {
  it("validates the landing json structure", () => {
    const parsed = landingContentSchema.safeParse(landingJson);
    expect(parsed.success).toBe(true);
  });
});
