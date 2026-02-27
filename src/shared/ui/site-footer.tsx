import Image from "next/image";
import type { LandingContent } from "@/content/schema";

type SiteFooterProps = {
  footer: LandingContent["footer"];
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="bg-blackMain px-20 py-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-mn.png" alt="Logo MN" width={48} height={26} />
          <p className="text-[13px] text-textMuted">{footer.left}</p>
        </div>
        <p className="text-[13px] text-textMuted">{footer.right}</p>
      </div>
    </footer>
  );
}
