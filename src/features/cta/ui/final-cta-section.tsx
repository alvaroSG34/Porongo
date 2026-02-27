import type { LandingContent } from "@/content/schema";
import { Button } from "@/shared/ui/button";

type FinalCtaSectionProps = {
  cta: LandingContent["finalCta"];
};

export function FinalCtaSection({ cta }: FinalCtaSectionProps) {
  return (
    <section id="contacto" className="bg-brandPink px-20 py-20">
      <div className="flex w-full flex-col items-center text-center">
        <span className="inline-flex rounded-full bg-brandYellow px-4 py-2 text-[14px] font-semibold text-blackMain">
          {cta.badge}
        </span>
        <h2 className="mt-6 max-w-5xl font-heading text-[62px] font-extrabold leading-tight text-white text-balance">
          {cta.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[19px] text-whiteMain">{cta.description}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-blackMain hover:bg-[#0d0d0de6]">{cta.primary}</Button>
          <Button variant="secondary">{cta.secondary}</Button>
        </div>
      </div>
    </section>
  );
}
