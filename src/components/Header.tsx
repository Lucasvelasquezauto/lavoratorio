"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link href="/#proyectos" className="hover:text-[var(--lab-ink)] transition-colors">
        {t("navProjects")}
      </Link>
      <Link href="/#certificaciones" className="hover:text-[var(--lab-ink)] transition-colors">
        {t("navCerts")}
      </Link>
      <Link href="/#contacto" className="hover:text-[var(--lab-ink)] transition-colors">
        {t("navContact")}
      </Link>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--lab-line)] bg-[var(--lab-bg)]/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight" onClick={() => setMenuOpen(false)}>
          LAV<span className="text-[var(--lab-amber)]">oratorio</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-wide text-[var(--lab-muted)]">
          {navLinks}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t("navClose") : t("navMenu")}
            className="sm:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded text-[var(--lab-muted)] hover:text-[var(--lab-ink)] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`sm:hidden overflow-hidden border-t border-[var(--lab-line)] bg-[var(--lab-bg)] transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-60" : "max-h-0 border-t-0"
        }`}
      >
        <div
          className="flex flex-col font-mono text-sm uppercase tracking-wide text-[var(--lab-muted)]"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/#proyectos" className="px-6 py-4 border-b border-[var(--lab-line)] hover:text-[var(--lab-ink)] transition-colors">
            {t("navProjects")}
          </Link>
          <Link href="/#certificaciones" className="px-6 py-4 border-b border-[var(--lab-line)] hover:text-[var(--lab-ink)] transition-colors">
            {t("navCerts")}
          </Link>
          <Link href="/#contacto" className="px-6 py-4 hover:text-[var(--lab-ink)] transition-colors">
            {t("navContact")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
