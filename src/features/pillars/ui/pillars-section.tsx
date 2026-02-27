"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LandingContent } from "@/content/schema";

type PillarsSectionProps = {
  pillars: LandingContent["pillars"];
};

const accentPalette = ["#F20587", "#F2CB05", "#F24BB2", "#F2A7C6"];
const impactLabels = ["Impacto Alto", "Impacto Economico", "Impacto Social", "Impacto Ambiental"];
const shortPhrases = [
  "Ciudad ordenada y planificada",
  "Mas empleo, mas oportunidades",
  "Calidad para cada barrio",
  "Ambiente limpio y protegido"
];

function PillarCard({ pillar, index }: { pillar: LandingContent["pillars"][number]; index: number }) {
  const reduceMotion = useReducedMotion();
  const accent = accentPalette[index % accentPalette.length];

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[24px] border border-[#ffffff33] bg-[#141414] p-8"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? {} : { y: -4 }}
    >
      <div className="absolute left-0 top-0 h-1.5 w-full" style={{ backgroundColor: accent }} />

      <div className="flex items-start justify-between gap-4">
        <span className="font-heading text-[72px] font-extrabold leading-none text-[#ffffff26]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="inline-flex rounded-full px-3 py-1 text-[12px] font-semibold text-blackMain"
          style={{ backgroundColor: accent }}
        >
          {impactLabels[index]}
        </span>
      </div>

      <h3 id={pillar.id} className="mt-4 font-heading text-[34px] font-extrabold leading-[1.05] text-whiteMain">
        {pillar.title}
      </h3>

      <p className="mt-3 text-[17px] font-medium text-textMuted">{shortPhrases[index]}</p>

      <motion.div
        className="mt-6 h-1 w-16 origin-left rounded-full"
        style={{ backgroundColor: accent }}
        whileHover={reduceMotion ? {} : { scaleX: 1.2 }}
      />
    </motion.article>
  );
}

export function PillarsSection({ pillars }: PillarsSectionProps) {
  return (
    <section className="bg-blackMain px-10 py-16">
      <div className="grid w-full grid-cols-2 gap-6">
        {pillars.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </section>
  );
}
