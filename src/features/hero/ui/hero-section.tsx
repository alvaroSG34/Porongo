import Image from "next/image";
import type { LandingContent } from "@/content/schema";

type HeroSectionProps = {
  hero: LandingContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  const planPdfHref =
    "/pdf/Plan%20de%20Gobierno%20de%20la%20Dra.%20Marisol%20Negrete%20Porongo.pdf";

  return (
    <section id="inicio" className="bg-[#E0398D]">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-10 sm:px-6 md:px-10 md:py-12 lg:px-20 lg:py-14">
          <div className="mb-5 sm:mb-6">
            <Image
              src="/images/logo-mn.png"
              alt="Logo Modernidad Nacional"
              width={160}
              height={52}
              className="h-auto w-[130px] sm:w-[145px] lg:w-[160px]"
              priority
            />
          </div>
          <span className="mb-6 inline-flex w-fit rounded-full border border-[#ffffff4d] bg-[#0d0d0d33] px-3 py-2 text-[13px] text-whiteMain sm:mb-8 sm:px-4 sm:text-[14px]">
            {hero.badge}
          </span>
          <h1 className="font-heading text-[clamp(2.5rem,10vw,4.4rem)] font-extrabold leading-[0.96] text-white">
            {hero.titleTop}
            <span className="mt-3 block text-brandYellow">{hero.titleAccent}</span>
          </h1>
          <span className="mt-6 inline-flex w-fit rounded-full bg-blackMain px-4 py-2 text-[15px] font-extrabold text-brandYellow sm:mt-8 sm:px-5 sm:text-[16px]">
            {hero.officePeriod}
          </span>
          <p className="content-readable mt-6 max-w-[440px] text-[clamp(1.5rem,5.5vw,1.75rem)] leading-[1.18] text-whiteMain sm:mt-7">
            {hero.summary}
          </p>
          <div className="mt-8">
            <a
              href={planPdfHref}
              download
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-brandYellow px-6 py-3 text-[15px] font-black text-blackMain transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brandYellowDark sm:px-7 sm:text-[16px]"
            >
              Descarga Plan de Gobierno
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-3 sm:mt-8">
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-[#ffffff4d] bg-[#ffffff26] px-3 py-1.5 text-[14px] text-whiteMain"
              >
                * {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[360px] bg-[#f2a7c6] sm:min-h-[480px] lg:min-h-[735px]">
          <Image
            src="/images/marisol-hero.png"
            alt="Dra. Marisol Negrete"
            fill
            className="object-cover"
            style={{ objectPosition: "center 16%" }}
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f2058733] via-transparent to-[#f24bb226]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#e0398d] to-transparent" />
        </div>
      </div>
    </section>
  );
}
