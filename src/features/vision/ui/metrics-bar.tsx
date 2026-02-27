import type { LandingContent } from "@/content/schema";

type MetricsBarProps = {
  metrics: LandingContent["metrics"];
};

export function MetricsBar({ metrics }: MetricsBarProps) {
  return (
    <section className="bg-[#E0398D]" aria-label="Metricas de campana">
      <div className="grid w-full grid-cols-4">
        {metrics.map((metric, idx) => (
          <article key={metric.label} className="border-r border-[#ffffff2e] px-4 py-5 text-center last:border-r-0">
            <p
              className={`font-heading text-[54px] font-extrabold leading-none ${
                idx % 2 === 0 ? "text-white" : "text-brandYellow"
              }`}
            >
              {metric.value}
            </p>
            <p className="mt-2 text-[14px] text-white">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
