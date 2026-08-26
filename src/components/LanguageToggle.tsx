"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 font-mono text-xs" role="group" aria-label="Language">
      <button
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "es" ? "text-[var(--lab-amber)]" : "text-[var(--lab-muted)] hover:text-[var(--lab-ink)]"
        }`}
      >
        ES
      </button>
      <span className="text-[var(--lab-line)]">/</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "en" ? "text-[var(--lab-amber)]" : "text-[var(--lab-muted)] hover:text-[var(--lab-ink)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
