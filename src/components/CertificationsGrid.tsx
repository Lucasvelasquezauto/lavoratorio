"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { certifications } from "@/data/certifications";
import ScrollReveal from "./ScrollReveal";

export default function CertificationsGrid() {
  const { t } = useLang();
  return (
    <section id="certificaciones" className="px-6 mx-auto max-w-6xl py-20 border-t border-[var(--lab-line)]">
      <ScrollReveal>
        <span className="lab-tag mb-3 block">{t("certsTitle")} · 002</span>
        <h2 className="font-display text-2xl mb-2">{t("certsTitle")}</h2>
        <p className="text-[var(--lab-muted)] max-w-md mb-10">{t("certsSub")}</p>
      </ScrollReveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {certifications.map((c) => (
          <ScrollReveal key={c.id}>
            <div className="hairline rounded-lg overflow-hidden bg-[var(--lab-bg-2)]">
              <div className="relative aspect-[4/3] bg-[var(--lab-paper)]">
                <Image src={c.image} alt={`${c.title} — ${c.issuer}`} fill className="object-contain p-2" />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium leading-snug">{c.title}</p>
                <p className="lab-tag mt-1">{c.issuer}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
