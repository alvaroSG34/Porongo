"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { LandingContent } from "@/content/schema";

type ProposalsSectionProps = {
  proposals: LandingContent["proposals"];
};

export function ProposalsSection({ proposals }: ProposalsSectionProps) {
  const [activeTabKey, setActiveTabKey] = useState(proposals.tabs[0]?.key ?? "");
  const reduceMotion = useReducedMotion();

  const current = useMemo(() => {
    const fallbackKey = proposals.tabs[0]?.key ?? "";
    const selectedKey = activeTabKey || fallbackKey;
    const tab = proposals.tabs.find((item) => item.key === selectedKey) ?? proposals.tabs[0];
    const proposal = proposals.items[selectedKey] ?? proposals.items[fallbackKey];

    return {
      tabLabel: tab?.label ?? "",
      ...proposal
    };
  }, [activeTabKey, proposals.items, proposals.tabs]);

  return (
    <section
      id="propuestas"
      className="bg-blackMain px-4 py-12 text-whiteMain sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <span className="inline-flex rounded-full bg-brandYellow px-3 py-2 text-[13px] font-semibold text-blackMain sm:px-4 sm:text-[14px]">
            {proposals.badge}
          </span>
          <h2 className="clean-title mt-5 font-heading text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1.05] sm:mt-6">
            {proposals.title}
          </h2>
          <p className="clean-copy mt-4 max-w-[48ch] text-[16px] leading-[1.45] sm:text-[18px]">{proposals.subtitle}</p>

          <div className="mt-9 grid gap-3">
            {proposals.tabs.map((tab, index) => {
              const active = tab.key === activeTabKey;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTabKey(tab.key)}
                  className={`focus-ring flex min-h-11 items-center justify-between rounded-2xl border px-4 py-2.5 text-left transition-all sm:min-h-12 sm:px-5 sm:py-3 ${
                    active
                      ? "border-brandPink bg-brandPink text-white shadow-lg"
                      : "border-[var(--color-soft-border)] bg-[var(--color-tab-inactive-bg)] text-[var(--color-tab-inactive-text)] hover:border-brandPinkLight"
                  }`}
                >
                  <span className="font-semibold text-[15px] sm:text-[16px]">{`0${index + 1} ${tab.label}`}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${active ? "bg-brandYellow" : "bg-[var(--color-soft-border)]"}`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeTabKey}
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, x: -18 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="grid overflow-hidden rounded-[24px] border border-[var(--color-soft-border)] bg-[var(--color-card-surface)] shadow-[0_20px_55px_rgba(0,0,0,0.35)] sm:rounded-[30px]"
          >
            <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px]">
              <Image
                src={current.image.src}
                alt={current.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-strong)] via-transparent to-transparent" />
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-7 lg:px-10 lg:py-9">
              <span className="inline-flex rounded-full bg-brandPinkLight px-3 py-2 text-[12px] font-semibold text-whiteMain sm:px-4 sm:text-[13px]">
                {current.tabLabel} - {current.category}
              </span>
              <h3 className="clean-title mt-4 font-heading text-[clamp(1.7rem,6vw,3rem)] font-extrabold leading-[1.05] text-textPrimary sm:mt-5">
                {current.title}
              </h3>
              <p className="clean-copy mt-4 text-[16px] leading-[1.45] text-textMuted sm:text-[18px]">{current.summary}</p>

              <ul className="mt-6 grid gap-2">
                {current.impacts.map((impact) => (
                  <li key={impact} className="clean-copy flex items-center gap-3 text-[15px] text-textPrimary sm:text-[16px]">
                    <span className="h-2 w-2 rounded-full bg-brandYellowDark" />
                    {impact}
                  </li>
                ))}
              </ul>

            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
