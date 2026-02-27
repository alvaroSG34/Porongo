import { FinalCtaSection } from "@/features/cta/ui/final-cta-section";
import { HeroSection } from "@/features/hero/ui/hero-section";
import { Navbar } from "@/features/hero/ui/navbar";
import { PillarsSection } from "@/features/pillars/ui/pillars-section";
import { ProposalsSection } from "@/features/proposals/ui/proposals-section";
import { VisionSection } from "@/features/vision/ui/vision-section";
import { SiteFooter } from "@/shared/ui/site-footer";
import { getLandingContent } from "@/content/lib/get-landing-content";

export default function HomePage() {
  const content = getLandingContent();

  return (
    <div className="desktop-canvas landing-pop">
      <Navbar nav={content.nav} />
      <main>
        <HeroSection hero={content.hero} />
        <VisionSection vision={content.vision} />
        <PillarsSection pillars={content.pillars} />
        <ProposalsSection proposals={content.proposals} />
        <FinalCtaSection cta={content.finalCta} />
      </main>
      <SiteFooter footer={content.footer} />
    </div>
  );
}
