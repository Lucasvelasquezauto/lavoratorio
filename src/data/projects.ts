export type Category = "automatizacion" | "analisis" | "agentes" | "exploracion";

export interface FlowStep {
  es: string;
  en: string;
}

export interface Project {
  slug: string;
  category: Category;
  title: { es: string; en: string };
  short: { es: string; en: string };
  problem: { es: string; en: string };
  approach: { es: string; en: string };
  stack: string[];
  result: { es: string; en: string };
  flow: FlowStep[];
  ctaType: "reusable" | "specific";
  color: "amber" | "cyan";
}

export const categoryLabels: Record<Category, { es: string; en: string }> = {
  automatizacion: { es: "Automatización de procesos", en: "Process automation" },
  analisis: { es: "Análisis y modelos predictivos", en: "Analysis & predictive models" },
  agentes: { es: "Herramientas y agentes", en: "Tools & agents" },
  exploracion: { es: "Exploración técnica", en: "Technical exploration" },
};

export const projects: Project[] = [
  {
    slug: "bot-pagos-psicologo",
    category: "automatizacion",
    color: "amber",
    ctaType: "specific",
    title: {
      es: "Bot de pagos y recordatorios para consulta psicológica",
      en: "Payment & reminder bot for a psychology practice",
    },
    short: {
      es: "Automatización que controla pagos de pacientes, envía recordatorios de citas y mantiene la agenda sincronizada, sin intervención manual.",
      en: "Automation that tracks patient payments, sends appointment reminders, and keeps the calendar in sync — no manual work.",
    },
    problem: {
      es: "Una psicóloga independiente perdía tiempo cada semana revisando manualmente qué pacientes habían pagado, cruzando eso con su calendario, y escribiendo recordatorios uno por uno.",
      en: "An independent psychologist lost hours every week manually checking which patients had paid, cross-referencing her calendar, and writing reminders one by one.",
    },
    approach: {
      es: "Se diseñó un flujo de 7 fases en n8n autohospedado sobre Railway: cada cita en Google Calendar dispara una verificación en Google Sheets (registro de pagos), y según el estado envía un recordatorio automático por Telegram al paciente o a la psicóloga. Un modelo de Gemini redacta el tono del mensaje según el contexto (primera cita, pago pendiente, confirmación).",
      en: "A 7-phase workflow was designed in self-hosted n8n on Railway: every Google Calendar appointment triggers a check against a Google Sheets payment log, and depending on status it sends an automatic Telegram reminder to the patient or the psychologist. A Gemini model drafts the message tone based on context (first session, pending payment, confirmation).",
    },
    stack: ["n8n", "Railway", "Google Calendar API", "Google Sheets API", "Telegram Bot API", "Gemini API"],
    result: {
      es: "Elimina el seguimiento manual de pagos y reduce las citas perdidas por falta de recordatorio.",
      en: "Removes manual payment tracking and reduces no-shows caused by missing reminders.",
    },
    flow: [
      { es: "Cita creada en Calendar", en: "Appointment created in Calendar" },
      { es: "Verifica registro de pago en Sheets", en: "Checks payment record in Sheets" },
      { es: "Genera mensaje con Gemini", en: "Drafts message with Gemini" },
      { es: "Envía recordatorio por Telegram", en: "Sends Telegram reminder" },
      { es: "Actualiza estado en Sheets", en: "Updates status in Sheets" },
    ],
  },
  {
    slug: "monitor-precios-supermercados",
    category: "automatizacion",
    color: "cyan",
    ctaType: "reusable",
    title: {
      es: "Monitor de precios en supermercados colombianos",
      en: "Price monitor for Colombian supermarkets",
    },
    short: {
      es: "Scraper que vigila el precio de un producto específico en varias cadenas y avisa por Telegram cuando baja.",
      en: "A scraper that watches a specific product's price across multiple chains and alerts via Telegram when it drops.",
    },
    problem: {
      es: "Comparar precios de un mismo producto entre cadenas distintas (Éxito, D1, Jumbo, Euro) a mano es lento y hay que repetirlo cada vez que se quiere comprar.",
      en: "Manually comparing a product's price across different chains (Éxito, D1, Jumbo, Euro) is slow and has to be repeated every time you want to buy.",
    },
    approach: {
      es: "Playwright navega cada sitio simulando un usuario real, extrae el precio actual y lo guarda en SQLite con fecha y cadena. Un proceso programado compara contra el historial y dispara una alerta de Telegram solo cuando detecta una bajada real, evitando falsos positivos por cambios de layout.",
      en: "Playwright navigates each site simulating a real user, extracts the current price, and stores it in SQLite with date and chain. A scheduled job compares it against history and only fires a Telegram alert on a real price drop, avoiding false positives from layout changes.",
    },
    stack: ["Python", "Playwright", "SQLite", "Telegram Bot API"],
    result: {
      es: "Detecta bajadas de precio en 4 cadenas sin revisión manual diaria.",
      en: "Detects price drops across 4 chains without daily manual checking.",
    },
    flow: [
      { es: "Playwright visita cada tienda", en: "Playwright visits each store" },
      { es: "Extrae precio actual", en: "Extracts current price" },
      { es: "Guarda en SQLite con histórico", en: "Stores in SQLite with history" },
      { es: "Compara contra precio anterior", en: "Compares against previous price" },
      { es: "Alerta por Telegram si bajó", en: "Telegram alert if it dropped" },
    ],
  },
  {
    slug: "herramientas-busqueda-empleo",
    category: "agentes",
    color: "amber",
    ctaType: "reusable",
    title: {
      es: "Sistema de búsqueda de empleo asistido por IA",
      en: "AI-assisted job search system",
    },
    short: {
      es: "Perfilado, optimización de CV por rol y búsqueda automatizada de oportunidades, construido durante una búsqueda de empleo real.",
      en: "Profiling, role-specific CV optimization, and automated opportunity search — built during a real job search.",
    },
    problem: {
      es: "Adaptar el CV y rastrear oportunidades relevantes para roles senior en impacto social, sostenibilidad y organismos multilaterales es un trabajo manual y repetitivo.",
      en: "Adapting a CV and tracking relevant openings for senior roles in social impact, sustainability, and multilateral agencies is manual, repetitive work.",
    },
    approach: {
      es: "Un conjunto de flujos en Claude Cowork perfila el objetivo profesional, genera versiones de CV ajustadas por tipo de rol y automatiza la búsqueda de vacantes, descartando conscientemente la automatización de LinkedIn por riesgo de bloqueo de cuenta.",
      en: "A set of Claude Cowork workflows profiles the target role, generates CV versions tailored per role type, and automates opportunity search — deliberately ruling out LinkedIn automation due to account-suspension risk.",
    },
    stack: ["Claude Cowork", "búsqueda automatizada", "prompt engineering"],
    result: {
      es: "Produjo una versión de CV (v5) enfocada en roles directivos de impacto social y sostenibilidad.",
      en: "Produced a CV version (v5) focused on senior social-impact and sustainability roles.",
    },
    flow: [
      { es: "Perfilado del objetivo profesional", en: "Target-role profiling" },
      { es: "Generación de versiones de CV", en: "CV version generation" },
      { es: "Búsqueda automatizada de vacantes", en: "Automated opportunity search" },
      { es: "Revisión y ajuste manual final", en: "Final manual review & tuning" },
    ],
  },
  {
    slug: "mod-roku-android",
    category: "exploracion",
    color: "cyan",
    ctaType: "specific",
    title: {
      es: "Modificar un Roku viejo para correr Android",
      en: "Modding an old Roku to run Android",
    },
    short: {
      es: "Experimento de hardware: intentar revivir un Roku fuera de uso instalándole Android por vías no oficiales.",
      en: "A hardware experiment: trying to revive a discarded Roku by installing Android through unofficial routes.",
    },
    problem: {
      es: "Un Roku viejo, ya fuera de servicio, como excusa para explorar rooting y sistemas embebidos sin miedo a dañar algo en uso.",
      en: "An old, already-retired Roku as an excuse to explore rooting and embedded systems without fear of breaking something in active use.",
    },
    approach: {
      es: "Exploración de RootMyRoku, acceso por consola serial UART, y evaluación de builds personalizados de Android TV — encontrando limitaciones reales de hardware (soporte de Widevine y HEVC 4K) que descartaron algunas rutas.",
      en: "Exploration of RootMyRoku, UART serial console access, and evaluation of custom Android TV builds — running into real hardware limitations (Widevine and 4K HEVC support) that ruled out some routes.",
    },
    stack: ["UART", "RootMyRoku", "Android TV builds", "Raspberry Pi"],
    result: {
      es: "Proyecto de exploración activo: documenta lo que funciona y lo que no, más útil como bitácora técnica que como tutorial cerrado.",
      en: "Active exploration project: documents what works and what doesn't — more useful as a technical log than a finished tutorial.",
    },
    flow: [
      { es: "Diagnóstico del hardware", en: "Hardware diagnosis" },
      { es: "Acceso serial UART", en: "UART serial access" },
      { es: "Intento de rooting", en: "Rooting attempt" },
      { es: "Evaluación de builds de Android TV", en: "Android TV build evaluation" },
      { es: "Registro de limitaciones encontradas", en: "Logging limitations found" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
