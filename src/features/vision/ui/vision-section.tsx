import type { LandingContent } from "@/content/schema";

type VisionSectionProps = {
  vision: LandingContent["vision"];
};

export function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section id="vision" className="bg-blackMain px-20 py-20">
      <div className="w-full">
        <span className="inline-flex rounded-full bg-brandPinkLight px-4 py-2 text-[14px] text-whiteMain">{vision.badge}</span>
        <h2 className="mt-6 max-w-5xl font-heading text-[55px] font-extrabold leading-tight text-white text-balance">
          {vision.title}
        </h2>
        <p className="content-readable mt-6 text-[18px] leading-[1.4] text-textMuted">{vision.description}</p>
      </div>
    </section>
  );
}
