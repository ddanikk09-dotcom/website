import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniło Website — Nowoczesne strony internetowe dla firm",
  description:
    "Tworzę nowoczesne, szybkie i responsywne strony internetowe dla małych firm i lokalnych biznesów w Polsce. Barbershopy, restauracje, salony kosmetyczne i więcej.",
  keywords:
    "strony internetowe, web design, Polska, barbershop, restauracja, salon kosmetyczny, web developer",
  openGraph: {
    title: "Daniło Website",
    description: "Nowoczesne strony internetowe dla małych firm.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
