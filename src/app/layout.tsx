import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://lavoratorio.vercel.app"),
  title: {
    default: "LAVoratorio — vitrina experimental de Lucas Velásquez",
    template: "%s — LAVoratorio",
  },
  description:
    "Economista y estratega autodidacta en IA. Vitrina experimental de apps, automatizaciones y agentes construidos desde 2025.",
  openGraph: {
    title: "LAVoratorio",
    description: "Vitrina experimental de Lucas Velásquez: apps, automatizaciones y agentes de IA.",
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
