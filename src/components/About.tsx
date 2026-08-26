"use client";

import { useLang } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useLang();
  return (
    <section className="px-6 mx-auto max-w-6xl py-16 border-t border-[var(--lab-line)]">
      <ScrollReveal>
        <div className="max-w-2xl">
          <span className="lab-tag mb-3 block">{t("aboutTitle")} — 000</span>
          <h2 className="font-display text-2xl mb-4">{t("aboutTitle")}</h2>
          <p className="text-[var(--lab-muted)] leading-relaxed">{t("aboutBody")}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
