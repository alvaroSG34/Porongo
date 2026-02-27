import landingRaw from "@/content/landing.json";
import { landingContentSchema } from "@/content/schema";

export function getLandingContent() {
  return landingContentSchema.parse(landingRaw);
}
