import type { LandingContent } from "@/content/schema";
import { Button } from "@/shared/ui/button";

type FinalCtaSectionProps = {
  cta: LandingContent["finalCta"];
};

export function FinalCtaSection({ cta }: FinalCtaSectionProps) {
  return (
    <section id="contacto" className="bg-brandPink px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="flex w-full flex-col items-center text-center">
        <span className="inline-flex rounded-full bg-brandYellow px-3 py-2 text-[13px] font-semibold text-blackMain sm:px-4 sm:text-[14px]">
          {cta.badge}
        </span>
        <h2 className="mt-5 max-w-5xl font-heading text-[clamp(2rem,7.5vw,3.9rem)] font-extrabold leading-tight text-whiteMain text-balance sm:mt-6">
          {cta.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[16px] text-whiteMain sm:text-[19px]">{cta.description}</p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button className="bg-blackMain hover:brightness-95">{cta.primary}</Button>
          <Button variant="secondary">{cta.secondary}</Button>
        </div>
      </div>
    </section>
  );
}
