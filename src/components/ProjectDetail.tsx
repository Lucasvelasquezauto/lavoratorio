"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useLang, Lang } from "@/lib/i18n";
import { Project } from "@/data/projects";
import FlowDiagram from "./FlowDiagram";
import ScrollReveal from "./ScrollReveal";

export default function ProjectDetail({ project }: { project: Project }) {
  const { lang, t } = useLang();
  const accent = project.color === "amber" ? "var(--lab-amber)" : "var(--lab-cyan)";
  const ctaLabel = project.ctaType === "reusable" ? t("ctaReusable") : t("ctaSpecific");

  return (
    <main className="relative z-10 pt-32 pb-24 px-6 mx-auto max-w-3xl">
      <Link href="/#proyectos" className="lab-tag hover:text-[var(--lab-ink)] transition-colors">
        ← {t("backHome")}
      </Link>

      <ScrollReveal className="mt-6">
        <h1 className="font-display text-4xl leading-tight mb-4">{project.title[lang as Lang]}</h1>
        <p className="text-[var(--lab-muted)] text-lg leading-relaxed">{project.short[lang as Lang]}</p>
      </ScrollReveal>

      {project.videos && project.videos.length > 0 ? (
        <ScrollReveal className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.videos.map((video) => (
              <div key={video.src}>
                <div
                  className="lab-media relative aspect-[9/16] hairline rounded-lg bg-[var(--lab-bg-2)] overflow-hidden"
                  style={{ "--accent": accent } as CSSProperties}
                >
                  <span className="lab-corner lab-corner-tl" />
                  <span className="lab-corner lab-corner-tr" />
                  <span className="lab-corner lab-corner-bl" />
                  <span className="lab-corner lab-corner-br" />
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <p className="lab-tag mt-2 text-center">{video.label[lang as Lang]}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      ) : project.gallery && project.gallery.length > 0 ? (
        <ScrollReveal className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="lab-media relative aspect-square hairline rounded-lg bg-[var(--lab-bg-2)] overflow-hidden"
                style={{ "--accent": accent } as CSSProperties}
              >
                <span className="lab-corner lab-corner-tl" />
                <span className="lab-corner lab-corner-tr" />
                <span className="lab-corner lab-corner-bl" />
                <span className="lab-corner lab-corner-br" />
                <Image
                  src={src}
                  alt={project.title[lang as Lang]}
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 256px"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      ) : (
        project.image && (
          <ScrollReveal className="mt-8">
            <div
              className="lab-media relative aspect-[2/1] hairline rounded-lg bg-[var(--lab-bg-2)]"
              style={{ "--accent": accent } as CSSProperties}
            >
              <span className="lab-corner lab-corner-tl" />
              <span className="lab-corner lab-corner-tr" />
              <span className="lab-corner lab-corner-bl" />
              <span className="lab-corner lab-corner-br" />
              <Image
                src={project.image}
                alt={project.title[lang as Lang]}
                fill
                className="object-contain p-6 transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </ScrollReveal>
        )
      )}

      <ScrollReveal className="mt-10">
        <p className="lab-tag mb-3">{t("flowTitle")}</p>
        <FlowDiagram steps={project.flow} color={project.color} />
      </ScrollReveal>

      <ScrollReveal className="mt-12 hairline rounded-lg p-6 bg-[var(--lab-bg-2)]">
        <p className="lab-tag mb-4" style={{ color: accent }}>
          {t("howBuilt")}
        </p>
        <div className="space-y-5">
          <div>
            <p className="lab-tag mb-1">{t("problem")}</p>
            <p className="text-[var(--lab-ink)] leading-relaxed">{project.problem[lang as Lang]}</p>
          </div>
          <div>
            <p className="lab-tag mb-1">{t("approach")}</p>
            <p className="text-[var(--lab-ink)] leading-relaxed">{project.approach[lang as Lang]}</p>
          </div>
          <div>
            <p className="lab-tag mb-1">{t("stack")}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((s) => (
                <span key={s} className="font-mono text-xs px-2 py-1 rounded hairline text-[var(--lab-muted)]">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="lab-tag mb-1">{t("result")}</p>
            <p className="text-[var(--lab-ink)] leading-relaxed">{project.result[lang as Lang]}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <Link
          href={`/ir/${project.slug}`}
          className="inline-block px-5 py-3 rounded-md font-mono text-sm uppercase tracking-wide transition hover:brightness-110"
          style={{ background: accent, color: "var(--lab-bg)" }}
        >
          {ctaLabel}
        </Link>
      </ScrollReveal>
    </main>
  );
}
