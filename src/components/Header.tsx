"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useLang();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--lab-line)] bg-[var(--lab-bg)]/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight">
          LAV<span className="text-[var(--lab-amber)]">oratorio</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-wide text-[var(--lab-muted)]">
          <Link href="/#proyectos" className="hover:text-[var(--lab-ink)] transition-colors">
            {t("navProjects")}
          </Link>
          <Link href="/#certificaciones" className="hover:text-[var(--lab-ink)] transition-colors">
            {t("navCerts")}
          </Link>
          <Link href="/#contacto" className="hover:text-[var(--lab-ink)] transition-colors">
            {t("navContact")}
          </Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
