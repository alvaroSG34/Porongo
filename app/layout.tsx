import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const heading = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading"
});

const body = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Dra. Marisol Negrete | Porongo Moderno",
  description:
    "Landing oficial de campaña con propuestas, visión de ciudad y plan de gobierno 2026-2031."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
