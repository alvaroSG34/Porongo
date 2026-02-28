import Image from "next/image";
import type { LandingContent } from "@/content/schema";

type HeroSectionProps = {
  hero: LandingContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  const planPdfHref =
    "/pdf/Plan%20de%20Gobierno%20de%20la%20Dra.%20Marisol%20Negrete%20Porongo.pdf";

  return (
    <section id="inicio" className="bg-[var(--color-hero-bg)]">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-10 text-center sm:px-6 md:px-10 md:py-12 lg:px-20 lg:py-14 lg:text-left">
          <span className="mb-6 inline-flex w-fit self-center rounded-full border-2 border-[var(--color-soft-border)] bg-[var(--color-soft-dark)] px-3 py-2 text-[13px] font-bold text-whiteMain shadow-[0_8px_22px_rgba(0,0,0,0.2)] sm:mb-8 sm:px-4 sm:text-[14px] lg:self-start">
            {hero.badge}
          </span>
          <div className="flex items-start justify-center gap-2 sm:gap-3 lg:justify-start">
            <h1 className="font-heading text-[clamp(2.7rem,10.5vw,4.8rem)] font-black leading-[0.94] text-whiteMain [text-shadow:0_2px_0_rgba(0,0,0,0.22),0_14px_30px_rgba(0,0,0,0.3)]">
              {hero.titleTop}
              <span className="mt-3 block text-brandYellow [text-shadow:0_2px_0_rgba(0,0,0,0.25),0_10px_26px_rgba(0,0,0,0.26)]">
                {hero.titleAccent}
              </span>
            </h1>
            <Image
              src="/images/logo-mn.png"
              alt="Logo Modernidad Nacional"
              width={160}
              height={52}
              className="mt-1 h-auto w-[140px] sm:w-[170px] lg:w-[220px]"
              priority
            />
          </div>
          <span className="mt-6 inline-flex w-fit self-center rounded-full bg-blackMain px-4 py-2 text-[15px] font-black tracking-[0.01em] text-brandYellow shadow-[0_10px_22px_rgba(0,0,0,0.32)] sm:mt-8 sm:px-5 sm:text-[16px] lg:self-start">
            {hero.officePeriod}
          </span>
          <p className="content-readable mt-6 max-w-[470px] self-center text-[clamp(1.6rem,5.7vw,1.9rem)] font-semibold leading-[1.2] text-whiteMain [text-shadow:0_2px_10px_rgba(0,0,0,0.24)] sm:mt-7 lg:self-start">
            {hero.summary}
          </p>
          <div className="mt-8 self-center lg:self-start">
            <a
              href={planPdfHref}
              download
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-brandYellow px-6 py-3 text-[15px] font-black text-blackMain transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brandYellowDark sm:px-7 sm:text-[16px]"
            >
              Descarga Plan de Gobierno
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start">
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border-2 border-[var(--color-soft-border)] bg-[var(--color-soft-surface)] px-5 py-2 text-[17px] font-bold text-whiteMain"
              >
                * {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[360px] bg-[var(--color-hero-bg)] sm:min-h-[480px] lg:min-h-[735px]">
          <Image
            src="/images/marisol-hero.png"
            alt="Dra. Marisol Negrete"
            fill
            className="object-contain"
            style={{ objectPosition: "center bottom" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
