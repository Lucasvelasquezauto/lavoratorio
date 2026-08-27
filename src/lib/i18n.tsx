"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const t_: Dict = {
  presentTag: { es: "cuaderno de trabajo", en: "lab notebook" },
  heroTitle: { es: "LAVoratorio", en: "LAVoratorio" },
  heroTagline: {
    es: "laboratorio personal de IA, automatización y desarrollo de soluciones",
    en: "a personal lab for AI, automation, and solution development",
  },
  heroSub: {
    es: "Economista y estratega con experiencia en planeación estratégica. Desde 2025 desarrollo soluciones con IA, automatización y herramientas digitales para convertir problemas concretos en sistemas que funcionan. Aquí documento lo que construyo.",
    en: "Economist and strategist with a background in strategic planning. Since 2025 I've been building solutions with AI, automation, and digital tools to turn concrete problems into systems that work. This is where I document what I build.",
  },
  navProjects: { es: "Proyectos", en: "Projects" },
  navCerts: { es: "Formación", en: "Training" },
  navContact: { es: "Contacto", en: "Contact" },
  navMenu: { es: "Abrir menú", en: "Open menu" },
  navClose: { es: "Cerrar menú", en: "Close menu" },
  aboutTitle: { es: "Por qué existe", en: "Why this exists" },
  aboutBody: {
    es: "Mi formación es en economía y planeación estratégica, no en desarrollo de software. Desde 2025 he profundizado de manera independiente en IA, automatización y desarrollo de soluciones, y he convertido esa formación en proyectos reales. Este sitio reúne parte de ese trabajo y lo organiza por el problema que cada proyecto resuelve, no por la complejidad técnica que hay detrás.",
    en: "My background is in economics and strategic planning, not software development. Since 2025 I've studied AI, automation, and solution development independently, and turned that into real projects. This site collects part of that work, organized by the problem each project solves, not by the technical complexity behind it.",
  },
  catAutomation: { es: "Automatización de procesos", en: "Process automation" },
  catAnalysis: { es: "Análisis y modelos predictivos", en: "Analysis & predictive models" },
  catAgents: { es: "Herramientas y soluciones inteligentes", en: "Tools & smart solutions" },
  catExploration: { es: "Exploraciones técnicas", en: "Technical explorations" },
  certsTitle: { es: "Formación complementaria", en: "Complementary training" },
  certsSub: {
    es: "Formación complementaria en IA, transformación digital, creatividad, liderazgo y otras capacidades relevantes para el diseño y aplicación de soluciones.",
    en: "Complementary training in AI, digital transformation, creativity, leadership, and other capabilities relevant to designing and applying solutions.",
  },
  contactTitle: { es: "Hablemos", en: "Let's talk" },
  contactBody: {
    es: "Si buscas una capacitación, una charla o quieres explorar una solución con IA para un problema concreto, escríbeme por LinkedIn.",
    en: "If you're looking for a training session, a talk, or want to explore an AI solution for a specific problem, message me on LinkedIn.",
  },
  contactCta: { es: "Escríbeme en LinkedIn", en: "Message me on LinkedIn" },
  backHome: { es: "Volver al inicio", en: "Back to home" },
  howBuilt: { es: "Cómo se hizo", en: "How it was built" },
  problem: { es: "Problema", en: "Problem" },
  approach: { es: "Enfoque", en: "Approach" },
  stack: { es: "Stack", en: "Stack" },
  result: { es: "Resultado", en: "Result" },
  flowTitle: { es: "Flujo del proceso", en: "Process flow" },
  ctaReusable: { es: "Solicita tu copia", en: "Request your copy" },
  ctaSpecific: { es: "Escríbeme por este proyecto", en: "Ask me about this project" },
  footerRights: { es: "Laboratorio en evolución. Nuevos proyectos y exploraciones se incorporan periódicamente.", en: "A lab in progress. New projects and explorations are added regularly." },
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof t_) => string;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lav-lang") as Lang | null;
      if (stored === "es" || stored === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of a persisted, purely client-side preference
        setLangState(stored);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lav-lang", l);
    } catch {}
  };

  const t = (key: keyof typeof t_) => t_[key][lang];

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
