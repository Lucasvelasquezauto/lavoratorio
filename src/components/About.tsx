"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useLang();
  return (
    <section className="px-6 mx-auto max-w-6xl py-16 border-t border-[var(--lab-line)]">
      <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
        <ScrollReveal>
          <div className="relative w-40 md:w-full max-w-[220px]">
            <div className="hairline rounded-lg overflow-hidden bg-[var(--lab-bg-2)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/foto/lucas.jpg"
                  alt="Lucas Velásquez"
                  fill
                  className="object-cover grayscale-[15%]"
                  sizes="220px"
                />
              </div>
            </div>
            <span className="lab-tag absolute -bottom-3 left-3 bg-[var(--lab-bg)] px-2" style={{ color: "var(--lab-amber)" }}>
              L.V. — 2026
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="lab-tag mb-3 block">{t("aboutTitle")} — 001</span>
            <h2 className="font-display text-2xl mb-4">{t("aboutTitle")}</h2>
            <p className="text-[var(--lab-muted)] leading-relaxed">{t("aboutBody")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
