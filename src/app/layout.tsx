import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://lavoratorio.vercel.app"),
  title: {
    default: "LAVoratorio — laboratorio personal de Lucas Velásquez",
    template: "%s — LAVoratorio",
  },
  description:
    "Economista y estratega con experiencia en planeación estratégica. Soluciones con IA, automatización y desarrollo construidas desde 2025.",
  openGraph: {
    title: "LAVoratorio",
    description: "Laboratorio personal de Lucas Velásquez: apps, automatizaciones y soluciones con IA.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full">
        <LangProvider>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
