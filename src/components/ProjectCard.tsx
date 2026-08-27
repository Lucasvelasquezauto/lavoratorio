"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { useLang, Lang } from "@/lib/i18n";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const accent = project.color === "amber" ? "var(--lab-amber)" : "var(--lab-cyan)";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className="group block h-full hairline rounded-lg overflow-hidden bg-[var(--lab-bg-2)] transition-colors hover:border-[var(--lab-line)]"
        style={{ borderColor: "var(--lab-line)" }}
      >
        <div className="p-6 flex gap-5">
          {project.image ? (
            <div
              className="lab-media relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-md bg-[var(--lab-bg-2)]"
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
                className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="112px"
              />
            </div>
          ) : (
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ background: `${accent}1a`, border: `1px solid ${accent}` }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-snug mb-2">{project.title[lang as Lang]}</h3>
            <p className="text-base sm:text-sm text-[var(--lab-muted)] leading-relaxed">{project.short[lang as Lang]}</p>
          </div>
        </div>
        <div className="px-6 pb-6">
          <span
            className="inline-block font-mono text-xs uppercase tracking-wide transition-colors"
            style={{ color: accent }}
          >
            {lang === "es" ? "Ver ficha →" : "View case →"}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
