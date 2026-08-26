"use client";

import { useLang } from "@/lib/i18n";
import { projects, categoryLabels, Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const order: Category[] = ["automatizacion", "analisis", "agentes", "exploracion"];

export default function CategorySections() {
  const { lang } = useLang();

  return (
    <section id="proyectos" className="px-6 mx-auto max-w-6xl py-20">
      {order.map((cat) => {
        const items = projects.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} id={cat} className="mb-16 last:mb-0 scroll-mt-24">
            <ScrollReveal>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="lab-tag">{cat}</span>
                <h2 className="font-display text-2xl">{categoryLabels[cat][lang]}</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {items.map((p) => (
                <ScrollReveal key={p.slug}>
                  <ProjectCard project={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
