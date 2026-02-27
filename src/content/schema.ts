import { z } from "zod";

const navItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1)
});

const heroSchema = z.object({
  badge: z.string(),
  titleTop: z.string(),
  titleAccent: z.string(),
  officePeriod: z.string(),
  summary: z.string(),
  buttons: z.array(z.object({ label: z.string(), variant: z.enum(["primary", "ghost"]) })).min(2),
  chips: z.array(z.string()).min(1)
});

const metricSchema = z.object({
  value: z.string(),
  label: z.string()
});

const pillarSchema = z.object({
  id: z.string(),
  indexLabel: z.string(),
  title: z.string(),
  description: z.string(),
  accentColor: z.string()
});

const proposalItemSchema = z.object({
  slug: z.string(),
  category: z.string(),
  title: z.string(),
  summary: z.string(),
  impacts: z.array(z.string()).min(1),
  cta: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number()
  })
});

const proposalTabSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1)
});

export const landingContentSchema = z.object({
  nav: z.object({
    brand: z.string(),
    items: z.array(navItemSchema).min(1)
  }),
  hero: heroSchema,
  metrics: z.array(metricSchema).min(4),
  vision: z.object({
    badge: z.string(),
    title: z.string(),
    description: z.string()
  }),
  pillars: z.array(pillarSchema).length(4),
  proposals: z.object({
    badge: z.string(),
    title: z.string(),
    subtitle: z.string(),
    tabs: z.array(proposalTabSchema).min(1),
    items: z.record(proposalItemSchema)
  }),
  finalCta: z.object({
    badge: z.string(),
    title: z.string(),
    description: z.string(),
    primary: z.string(),
    secondary: z.string()
  }),
  footer: z.object({
    left: z.string(),
    right: z.string()
  })
});

export type LandingContent = z.infer<typeof landingContentSchema>;
export type PillarItem = z.infer<typeof pillarSchema>;
export type ProposalItem = z.infer<typeof proposalItemSchema>;
