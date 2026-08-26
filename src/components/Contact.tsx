"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contacto" className="px-6 mx-auto max-w-6xl py-24 border-t border-[var(--lab-line)]">
      <div className="max-w-lg">
        <span className="lab-tag mb-3 block">{t("contactTitle")} — 003</span>
        <h2 className="font-display text-3xl mb-4">{t("contactTitle")}</h2>
        <p className="text-[var(--lab-muted)] mb-8 leading-relaxed">{t("contactBody")}</p>
        <Link
          href="/ir/contacto-general"
          className="inline-block px-5 py-3 rounded-md font-mono text-sm uppercase tracking-wide bg-[var(--lab-amber)] text-[var(--lab-bg)] hover:brightness-110 transition"
        >
          {t("contactCta")}
        </Link>
      </div>
      <p className="lab-tag mt-16">{t("footerRights")}</p>
    </section>
  );
}
