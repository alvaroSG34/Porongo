import type { LandingContent } from "@/content/schema";

type VisionSectionProps = {
  vision: LandingContent["vision"];
};

export function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section id="vision" className="bg-blackMain px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="w-full">
        <span className="inline-flex rounded-full bg-brandPinkLight px-3 py-2 text-[13px] text-whiteMain sm:px-4 sm:text-[14px]">
          {vision.badge}
        </span>
        <h2 className="mt-5 max-w-5xl font-heading text-[clamp(2rem,7vw,3.45rem)] font-extrabold leading-tight text-whiteMain text-balance sm:mt-6">
          {vision.title}
        </h2>
        <p className="content-readable mt-5 text-[16px] leading-[1.45] text-textMuted sm:mt-6 sm:text-[18px]">
          {vision.description}
        </p>
      </div>
    </section>
  );
}
