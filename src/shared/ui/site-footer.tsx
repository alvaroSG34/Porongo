import Image from "next/image";
import type { LandingContent } from "@/content/schema";

type SiteFooterProps = {
  footer: LandingContent["footer"];
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="bg-blackMain px-4 py-5 sm:px-6 md:px-10 lg:px-20">
      <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-mn.png" alt="Logo MN" width={48} height={26} />
          <p className="break-words text-[12px] text-textMuted sm:text-[13px]">{footer.left}</p>
        </div>
        <p className="break-words text-[12px] text-textMuted sm:text-[13px]">{footer.right}</p>
      </div>
    </footer>
  );
}
