"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { LandingContent } from "@/content/schema";

type NavbarProps = {
  nav: LandingContent["nav"];
};

export function Navbar({ nav }: NavbarProps) {
  const sectionIds = useMemo(() => nav.items.map((item) => item.href.replace("#", "")), [nav.items]);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ffffff33] bg-[#0d0d0de6] backdrop-blur-md">
      <nav className="flex h-20 w-full items-center gap-4 px-4 sm:px-6 md:px-10" aria-label="Principal">
        <a href="#inicio" className="focus-ring inline-flex items-center gap-3 rounded-md">
          <Image src="/images/logo-mn.png" alt="Logo Modernidad Nacional" width={34} height={20} />
          <span className="font-heading text-[14px] font-semibold text-whiteMain sm:text-[15px]">{nav.brand}</span>
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="focus-ring ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ffffff55] text-white md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <ul className="ml-10 hidden items-center gap-10 md:flex">
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
          className="focus-ring ml-auto hidden min-h-11 items-center rounded-full bg-brandPink px-6 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
        >
          Apoya a Marisol
        </a>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-[#ffffff22] bg-[#0d0d0df2] px-4 py-4 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-2">
              {nav.items.map((item) => {
                const itemId = item.href.replace("#", "");
                const isActive = activeId === itemId;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        setActiveId(itemId);
                        setMobileOpen(false);
                      }}
                      className={`focus-ring block rounded-xl px-3 py-3 text-[15px] transition-colors ${
                        isActive ? "bg-brandPink text-white" : "text-white hover:bg-[#ffffff14]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="focus-ring mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brandPink px-6 text-[15px] font-semibold text-white"
            >
              Apoya a Marisol
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
