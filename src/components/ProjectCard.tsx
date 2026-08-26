"use client";

import Link from "next/link";
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
        className="group block h-full hairline rounded-lg p-6 bg-[var(--lab-bg-2)] transition-colors hover:border-[var(--lab-line)]"
        style={{ borderColor: "var(--lab-line)" }}
      >
        <div
          className="w-10 h-10 rounded-full mb-5 flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ background: `${accent}1a`, border: `1px solid ${accent}` }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
        </div>
        <h3 className="font-display text-xl leading-snug mb-2">{project.title[lang as Lang]}</h3>
        <p className="text-sm text-[var(--lab-muted)] leading-relaxed">{project.short[lang as Lang]}</p>
        <span
          className="inline-block mt-4 font-mono text-xs uppercase tracking-wide transition-colors"
          style={{ color: accent }}
        >
          {lang === "es" ? "Ver ficha →" : "View case →"}
        </span>
      </Link>
    </motion.div>
  );
}
