"use client";

import { useLang } from "@/lib/i18n";
import SignatureCircuit from "./SignatureCircuit";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative pt-40 pb-24 px-6 mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="lab-tag mb-4">{t("presentTag")} — 001</p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 text-lg text-[var(--lab-paper)]/90 font-display">{t("heroTagline")}</p>
        <p className="mt-6 max-w-md text-[var(--lab-muted)] leading-relaxed">{t("heroSub")}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <SignatureCircuit />
      </div>
    </section>
  );
}
