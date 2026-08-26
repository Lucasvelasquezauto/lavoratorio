import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lavoratorio.vercel.app";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/proyectos/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
