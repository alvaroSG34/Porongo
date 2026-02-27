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
    <section id="propuestas" className="bg-blackMain px-20 py-20 text-whiteMain">
      <div className="grid w-full grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <span className="inline-flex rounded-full bg-brandYellow px-4 py-2 text-[14px] font-semibold text-blackMain">
            {proposals.badge}
          </span>
          <h2 className="mt-6 font-heading text-[56px] font-extrabold leading-[1.05]">{proposals.title}</h2>
          <p className="mt-4 max-w-[48ch] text-[18px] leading-[1.4]">{proposals.subtitle}</p>

          <div className="mt-9 grid gap-3">
            {proposals.tabs.map((tab, index) => {
              const active = tab.key === activeTabKey;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTabKey(tab.key)}
                  className={`focus-ring flex min-h-12 items-center justify-between rounded-2xl border px-5 py-3 text-left transition-all ${
                    active
                      ? "border-brandPink bg-brandPink text-white shadow-lg"
                      : "border-[#ffffff3d] bg-[#ffffff14] text-whiteMain hover:border-brandPinkLight"
                  }`}
                >
                  <span className="font-semibold text-[16px]">{`0${index + 1} ${tab.label}`}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${active ? "bg-brandYellow" : "bg-[#ffffff88]"}`} />
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
            className="grid overflow-hidden rounded-[30px] border border-[#ffffff3d] bg-[#ffffff12] shadow-[0_20px_55px_rgba(0,0,0,0.35)]"
          >
            <div className="relative min-h-[350px]">
              <Image
                src={current.image.src}
                alt={current.image.alt}
                fill
                sizes="48vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d88] via-transparent to-transparent" />
            </div>

            <div className="px-10 py-9">
              <span className="inline-flex rounded-full bg-brandPinkLight px-4 py-2 text-[13px] font-semibold text-white">
                {current.tabLabel} - {current.category}
              </span>
              <h3 className="mt-5 font-heading text-[48px] font-extrabold leading-[1.05] text-whiteMain">{current.title}</h3>
              <p className="mt-4 text-[18px] leading-[1.42] text-textMuted">{current.summary}</p>

              <ul className="mt-6 grid gap-2">
                {current.impacts.map((impact) => (
                  <li key={impact} className="flex items-center gap-3 text-[16px] text-whiteMain">
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
