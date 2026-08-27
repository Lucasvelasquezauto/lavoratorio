"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const t_: Dict = {
  presentTag: { es: "cuaderno de trabajo", en: "lab notebook" },
  heroTitle: { es: "LAVoratorio", en: "LAVoratorio" },
  heroTagline: {
    es: "vitrina experimental de Lucas Velásquez",
    en: "an experimental showcase by Lucas Velásquez",
  },
  heroSub: {
    es: "Economista y estratega, autodidacta en IA desde 2025. Aquí documento lo que construyo: apps, automatizaciones, agentes y experimentos.",
    en: "Economist and strategist, self-taught in AI since 2025. This is where I document what I build: apps, automations, agents, and experiments.",
  },
  navProjects: { es: "Proyectos", en: "Projects" },
  navCerts: { es: "Certificaciones", en: "Certifications" },
  navContact: { es: "Contacto", en: "Contact" },
  navMenu: { es: "Abrir menú", en: "Open menu" },
  navClose: { es: "Cerrar menú", en: "Close menu" },
  aboutTitle: { es: "Por qué esto existe", en: "Why this exists" },
  aboutBody: {
    es: "No soy desarrollador de formación — soy economista con experiencia en planeación estratégica. Desde 2025 me formé por mi cuenta en IA y automatización, y empecé a construir en serio: primero por necesidad, después por hábito. Este sitio reúne esos proyectos, clasificados por lo que resuelven, no por qué tan complejo es el código detrás.",
    en: "I'm not a trained developer — I'm an economist with a background in strategic planning. Since 2025 I've been self-taught in AI and automation, and started building for real: first out of necessity, then out of habit. This site collects those projects, organized by what they solve, not by how complex the code behind them is.",
  },
  catAutomation: { es: "Automatización de procesos", en: "Process automation" },
  catAnalysis: { es: "Análisis y modelos predictivos", en: "Analysis & predictive models" },
  catAgents: { es: "Herramientas y agentes", en: "Tools & agents" },
  catExploration: { es: "Exploración técnica", en: "Technical exploration" },
  certsTitle: { es: "Certificaciones", en: "Certifications" },
  certsSub: {
    es: "Formación complementaria en habilidades duras y blandas del ecosistema de IA.",
    en: "Complementary training in hard and soft skills across the AI ecosystem.",
  },
  contactTitle: { es: "Hablemos", en: "Let's talk" },
  contactBody: {
    es: "Si algo de esto te sirve para una capacitación, una charla o simplemente quieres saber más, escríbeme por LinkedIn.",
    en: "If any of this is useful for a training session, a talk, or you'd just like to know more, message me on LinkedIn.",
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
  mediaNote: {
    es: "Diagrama ilustrativo — video real del proyecto en camino.",
    en: "Illustrative diagram — real project footage coming soon.",
  },
  footerRights: { es: "Sitio experimental, actualizado seguido.", en: "Experimental site, updated often." },
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
