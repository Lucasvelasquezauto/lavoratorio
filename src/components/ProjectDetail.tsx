"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, Lang } from "@/lib/i18n";
import { Project } from "@/data/projects";
import FlowDiagram from "./FlowDiagram";
import ScrollReveal from "./ScrollReveal";

export default function ProjectDetail({ project }: { project: Project }) {
  const { lang, t } = useLang();
  const accent = project.color === "amber" ? "var(--lab-amber)" : "var(--lab-cyan)";
  const ctaLabel = project.ctaType === "reusable" ? t("ctaReusable") : t("ctaSpecific");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

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
              <motion.button
                key={src}
                type="button"
                layoutId={`gallery-${src}`}
                onClick={() => setLightbox(src)}
                aria-label={project.title[lang as Lang]}
                className="lab-media relative aspect-square hairline rounded-lg bg-[var(--lab-bg-2)] overflow-hidden cursor-zoom-in text-left"
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
              </motion.button>
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

      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              layoutId={`gallery-${lightbox}`}
              transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.6 }}
              className="relative w-full max-w-3xl aspect-[3/4] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt={project.title[lang as Lang]}
                fill
                className="object-contain bg-[var(--lab-bg-2)]"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </motion.div>
            <motion.button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-2xl leading-none text-white/90 transition hover:bg-black/60 hover:text-white"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
