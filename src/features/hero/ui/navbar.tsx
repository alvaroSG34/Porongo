"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { LandingContent } from "@/content/schema";

type NavbarProps = {
  nav: LandingContent["nav"];
};

export function Navbar({ nav }: NavbarProps) {
  const sectionIds = useMemo(() => nav.items.map((item) => item.href.replace("#", "")), [nav.items]);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const probeY = 130;
      let currentId = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          currentId = id;
          break;
        }
      }

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ffffff33] bg-[#0d0d0de6] backdrop-blur-md">
      <nav className="flex h-20 w-full items-center gap-8 px-10" aria-label="Principal">
        <a href="#inicio" className="focus-ring inline-flex items-center gap-3 rounded-md">
          <Image src="/images/logo-mn.png" alt="Logo Modernidad Nacional" width={34} height={20} />
          <span className="font-heading text-[15px] font-semibold text-whiteMain">{nav.brand}</span>
        </a>

        <ul className="ml-auto flex items-center gap-10">
          {nav.items.map((item) => {
            const itemId = item.href.replace("#", "");
            const isActive = activeId === itemId;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveId(itemId)}
                  className={`focus-ring relative rounded-md px-1 py-1 text-[15px] transition-colors ${
                    isActive ? "text-brandYellow" : "text-white hover:text-brandYellow"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-brandYellow transition-all duration-200 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contacto"
          className="focus-ring ml-8 inline-flex min-h-11 items-center rounded-full bg-brandPink px-6 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-110"
        >
          Apoya a Marisol
        </a>
      </nav>
    </header>
  );
}
