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
  image?: string;
}

export const categoryLabels: Record<Category, { es: string; en: string }> = {
  automatizacion: { es: "Automatización de procesos", en: "Process automation" },
  analisis: { es: "Análisis y modelos predictivos", en: "Analysis & predictive models" },
  agentes: { es: "Herramientas y soluciones inteligentes", en: "Tools & smart solutions" },
  exploracion: { es: "Exploraciones técnicas", en: "Technical explorations" },
};

export const projects: Project[] = [
  {
    slug: "bot-pagos-psicologo",
    category: "automatizacion",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/bot-pagos.png",
    title: {
      es: "Bot de pagos y recordatorios para consulta psicológica",
      en: "Payment & reminder bot for a psychology practice",
    },
    short: {
      es: "Automatiza el seguimiento de pagos, los recordatorios de citas y la sincronización de agenda, reduciendo tareas administrativas y eliminando buena parte de la gestión manual.",
      en: "Automates payment tracking, appointment reminders, and calendar syncing — reducing administrative work and most of the manual effort involved.",
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
    image: "/proyectos/monitor-precios.png",
    title: {
      es: "Monitor de precios en supermercados colombianos",
      en: "Price monitor for Colombian supermarkets",
    },
    short: {
      es: "Sistema de monitoreo que consulta el precio de un producto en distintas cadenas y envía una alerta por Telegram cuando detecta una reducción.",
      en: "A monitoring system that checks a product's price across different chains and sends a Telegram alert when it detects a drop.",
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
    image: "/proyectos/desarrollo-laboral.png",
    title: {
      es: "Sistema de desarrollo laboral y optimización de CV",
      en: "Career development & CV optimization system",
    },
    short: {
      es: "Sistema para perfilar experiencia profesional, adaptar el CV a cada rol y automatizar el seguimiento de oportunidades, desarrollado y probado durante una búsqueda laboral real.",
      en: "A system to profile professional experience, tailor the CV to each role, and automate opportunity tracking — developed and tested during a real job search.",
    },
    problem: {
      es: "Adaptar el CV y rastrear oportunidades relevantes para roles senior en impacto social, sostenibilidad y organismos multilaterales es un trabajo manual y repetitivo.",
      en: "Adapting a CV and tracking relevant openings for senior roles in social impact, sustainability, and multilateral agencies is manual, repetitive work.",
    },
    approach: {
      es: "Un conjunto de flujos en Claude Cowork perfila el objetivo profesional, genera versiones de CV ajustadas por tipo de rol y automatiza la búsqueda de vacantes, descartando conscientemente la automatización de LinkedIn por riesgo de bloqueo de cuenta.",
      en: "A set of Claude Cowork workflows profiles the target role, generates CV versions tailored per role type, and automates opportunity search — deliberately ruling out LinkedIn automation due to account-suspension risk.",
    },
    stack: ["Claude Cowork", "Búsqueda automatizada", "Prompt engineering"],
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
    slug: "ticinco",
    category: "agentes",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/ticinco.png",
    title: {
      es: "Ticinco (T5): juego de palabras con app complementaria",
      en: "Ticinco (T5): a word game with a companion app",
    },
    short: {
      es: "Juego de mesa híbrido convertido en una experiencia digital con Flutter: asigna categorías y letras, controla el tiempo de cada ronda y lleva el marcador hasta el 'ticinco'.",
      en: "A hybrid board game turned into a digital experience with Flutter: assigns categories and letters, times each round, and tracks the score toward a 'ticinco'.",
    },
    problem: {
      es: "T5 nació en papel: cartas, un dado y un cronómetro de celular. Funcionaba, pero ampliar categorías o llevar el puntaje a mano se volvía tedioso partida tras partida.",
      en: "T5 started on paper: cards, a die, and a phone stopwatch. It worked, but expanding categories or tracking scores by hand got tedious game after game.",
    },
    approach: {
      es: "Construí una app multiplataforma en Flutter (Android, iOS, web y escritorio desde el mismo código) que arbitra el juego sin reemplazar la parte social: reparte categoría y letra, corre el temporizador de 60 segundos con avisos sonoros, aplica las reglas de puntaje y penalización, y lleva el conteo hacia el 'ticinco' — dejando en la mesa lo que importa: escribir, debatir y votar palabras.",
      en: "I built a cross-platform Flutter app (Android, iOS, web and desktop from one codebase) that referees the game without replacing its social core: it deals category and letter, runs the 60-second timer with sound cues, applies scoring and penalty rules, and tracks the race to a 'ticinco' — leaving what matters on the table: writing, debating, and voting on words.",
    },
    stack: ["Flutter", "Dart", "Provider", "go_router", "audioplayers", "JSON de categorías"],
    result: {
      es: "Categorías ilimitadas y editables, conteo automático, y una app ya empaquetada para Android lista para publicar.",
      en: "Unlimited, editable categories, automatic scoring, and an app already packaged for Android and ready to publish.",
    },
    flow: [
      { es: "Reparte categoría y letra", en: "Deals category and letter" },
      { es: "Corre el temporizador de 60s", en: "Runs the 60s timer" },
      { es: "Jugadores escriben y votan palabras", en: "Players write and vote on words" },
      { es: "Calcula puntaje y penalizaciones", en: "Calculates score and penalties" },
      { es: "Suma hacia el próximo 'ticinco'", en: "Tallies toward the next 'ticinco'" },
    ],
  },
  {
    slug: "radiola",
    category: "agentes",
    color: "cyan",
    ctaType: "specific",
    image: "/proyectos/radiola.png",
    title: {
      es: "Radiola: juego musical integrado con Spotify",
      en: "Radiola: a music game integrated with Spotify",
    },
    short: {
      es: "Juego híbrido para 2 a 10 personas que convierte listas de Spotify en retos para adivinar canciones, inspirado en la experiencia de las rockolas de los años 90.",
      en: "A hybrid game for 2 to 10 people that turns Spotify playlists into song-guessing challenges, inspired by the jukebox experience of the 90s.",
    },
    problem: {
      es: "Quería recrear la mecánica de Rockola, un juego de mesa de los 90, pero con la música real de cada grupo — no un mazo fijo de canciones que se vuelve viejo a la tercera partida.",
      en: "I wanted to recreate the mechanics of Rockola, a 90s board game, but with each group's real music — not a fixed deck of songs that goes stale by the third round.",
    },
    approach: {
      es: "App nativa de Android en Kotlin con Jetpack Compose, integrada directamente con el SDK de Spotify (Spotify App Remote) para controlar la reproducción real desde las playlists del usuario. Implementé ocho tipos de reto distintos (banda, mímica, dueto, productor, pista, cita, ritmo, canto), cada uno una forma diferente de interactuar con la canción sonando, con Room y Firebase para guardar partidas y sincronizar datos.",
      en: "A native Android app in Kotlin with Jetpack Compose, wired directly into the Spotify SDK (Spotify App Remote) to control real playback from the user's own playlists. I implemented eight distinct challenge types (band, mime, duet, producer, clue, quote, rhythm, sing) — each a different way to interact with the song playing — with Room and Firebase for saving games and syncing data.",
    },
    stack: ["Kotlin", "Jetpack Compose", "Spotify App Remote SDK", "Room", "Firebase Firestore", "WorkManager"],
    result: {
      es: "Ocho mecánicas de reto ya implementadas y reproducción real desde Spotify, sin depender de un catálogo de canciones fijo.",
      en: "Eight challenge mechanics already implemented, with real Spotify playback — no dependency on a fixed song catalog.",
    },
    flow: [
      { es: "Eliges tu playlist de Spotify", en: "Pick your Spotify playlist" },
      { es: "La app sortea un reto", en: "The app draws a challenge" },
      { es: "Suena la canción real", en: "The real song plays" },
      { es: "El grupo interactúa con el reto", en: "The group plays out the challenge" },
      { es: "Se suman los puntos", en: "Points are tallied" },
    ],
  },
  {
    slug: "timerflow",
    category: "automatizacion",
    color: "amber",
    ctaType: "reusable",
    image: "/proyectos/timerflow.png",
    title: {
      es: "Timerflow: temporizador por rondas para rutinas",
      en: "Timerflow: a per-round timer for routines",
    },
    short: {
      es: "Aplicación Android para configurar tiempos independientes en cada ronda de una rutina de ejercicio, sin publicidad y con programación flexible.",
      en: "An Android app to set independent durations for each round of an exercise routine, ad-free and fully configurable.",
    },
    problem: {
      es: "Mis rutinas de ejercicio suelen tener tres rondas, y normalmente uno va más lento conforme avanza la sesión. No encontré un temporizador simple, sin publicidad, que permitiera un tiempo distinto por ronda con descansos entre ellas.",
      en: "My workouts usually run three rounds, and pace naturally slows as the session goes on. I couldn't find a simple, ad-free timer that let each round have its own duration with rest periods in between.",
    },
    approach: {
      es: "Construí una app Android nativa en Kotlin con Views tradicionales (sin frameworks pesados), donde cada ronda tiene su propia duración configurable, con descansos programables entre etapas y avisos luminosos y sonoros al acabarse el tiempo. Colores y tamaño de fuente son personalizables, y la configuración se guarda localmente en JSON con Gson — sin backend ni anuncios.",
      en: "I built a native Android app in Kotlin with traditional Views (no heavy frameworks), where each round has its own configurable duration, with programmable rest periods between stages and visual and sound alerts when time runs out. Colors and font size are customizable, and the configuration is saved locally as JSON with Gson — no backend, no ads.",
    },
    stack: ["Kotlin", "Android Views", "ConstraintLayout", "Gson"],
    result: {
      es: "Uso diario propio: cero fricción, cero anuncios, y exactamente el temporizador que mis rutinas necesitaban.",
      en: "Daily personal use: zero friction, zero ads, exactly the timer my routines needed.",
    },
    flow: [
      { es: "Configura tiempo por ronda", en: "Set duration per round" },
      { es: "Agrega descansos entre rondas", en: "Add rests between rounds" },
      { es: "Corre la rutina completa", en: "Runs the full routine" },
      { es: "Avisa con luz y sonido al cambiar de etapa", en: "Alerts with light and sound on each stage change" },
    ],
  },
  {
    slug: "acronico",
    category: "automatizacion",
    color: "cyan",
    ctaType: "reusable",
    image: "/proyectos/acronico.png",
    title: {
      es: "Acronico: temporizador multietapa basado en secuencias",
      en: "Acronico: a multi-stage, sequence-based timer",
    },
    short: {
      es: "Aplicación para importar secuencias de pasos y tiempos, ejecutarlas de forma ordenada y mostrar en todo momento la etapa actual y la siguiente.",
      en: "An app to import sequences of steps and durations, run them in order, and always show the current and next stage.",
    },
    problem: {
      es: "En un curso de masajes necesitaba llevar el tiempo de cada movimiento y zona del cuerpo sin perder el ritmo ni mirar el celular todo el tiempo — y sin tener que reconfigurar la secuencia desde cero cada vez.",
      en: "In a massage course I needed to time each movement and body area without losing rhythm or checking my phone constantly — and without rebuilding the sequence from scratch every time.",
    },
    approach: {
      es: "App Android en Kotlin con Jetpack Compose, Room para guardar secuencias completas y DataStore para preferencias. El temporizador corre como un servicio en primer plano con notificación, así no se detiene al apagar la pantalla. Permite importar la secuencia de pasos y tiempos desde un archivo (exportado típicamente desde Excel), y muestra en pantalla la etapa actual, el tiempo restante y la siguiente etapa para ir preparándose.",
      en: "An Android app in Kotlin with Jetpack Compose, using Room to save full sequences and DataStore for preferences. The timer runs as a foreground service with a notification, so it keeps going even with the screen off. It imports the sequence of steps and durations from a file (typically exported from Excel), and shows the current stage, remaining time, and the next stage on screen so you can get ready.",
    },
    stack: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "Foreground Service", "importación CSV"],
    result: {
      es: "Aplicable más allá de los masajes: cualquier disciplina con varias etapas cronometradas en secuencia — fisioterapia, cocina, entrenamiento.",
      en: "Applicable beyond massage: any discipline with several timed stages in sequence — physical therapy, cooking, training.",
    },
    flow: [
      { es: "Importa la secuencia de pasos y tiempos", en: "Imports the sequence of steps and durations" },
      { es: "Corre como servicio en primer plano", en: "Runs as a foreground service" },
      { es: "Muestra etapa actual y tiempo restante", en: "Shows current stage and time left" },
      { es: "Anticipa la siguiente etapa", en: "Previews the next stage" },
    ],
  },
  {
    slug: "crossed",
    category: "exploracion",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/crossed.png",
    title: {
      es: "Crossed: digitalización de crucigramas con OCR",
      en: "Crossed: crossword digitization with OCR",
    },
    short: {
      es: "Captura el crucigrama impreso del diario ADN, reconstruye su cuadrícula mediante OCR y la convierte en una versión interactiva para resolver y guardar en el celular.",
      en: "Captures the printed crossword from newspaper ADN, rebuilds its grid using OCR, and turns it into an interactive version to solve and save on your phone.",
    },
    problem: {
      es: "Soy fanático de los crucigramas que publica el diario ADN, pero solo existen como imagen estática — no se pueden diligenciar ni guardar para retomar después.",
      en: "I'm a fan of the crossword puzzle published by the Colombian newspaper ADN, but it only exists as a static image — there's no way to fill it in or save progress to pick up later.",
    },
    approach: {
      es: "App Android en Kotlin con Jetpack Compose que toma la captura de pantalla del crucigrama, usa ML Kit (OCR on-device de Google) para reconocer el texto y su posición en la imagen, y reconstruye la cuadrícula jugable a partir de esas coordenadas — mostrando la pista correspondiente al tocar cada casilla. El progreso se guarda localmente.",
      en: "An Android app in Kotlin with Jetpack Compose that takes the crossword screenshot, uses ML Kit (Google's on-device OCR) to recognize the text and its position in the image, and rebuilds a playable grid from those coordinates — showing the matching clue when you tap a cell. Progress is saved locally.",
    },
    stack: ["Kotlin", "Jetpack Compose", "ML Kit (OCR on-device)", "Coil", "SharedPreferences"],
    result: {
      es: "Pasa de una imagen estática a un crucigrama diligenciable y guardable, sin depender de que el diario publique una versión interactiva.",
      en: "Turns a static image into a fillable, savable crossword, without depending on the newspaper ever publishing an interactive version.",
    },
    flow: [
      { es: "Captura de pantalla del crucigrama", en: "Screenshot of the crossword" },
      { es: "OCR reconoce texto y posición", en: "OCR recognizes text and position" },
      { es: "Reconstruye la cuadrícula jugable", en: "Rebuilds the playable grid" },
      { es: "Muestra la pista al tocar la casilla", en: "Shows the clue on tap" },
      { es: "Guarda el progreso", en: "Saves progress" },
    ],
  },
  {
    slug: "autoframe",
    category: "automatizacion",
    color: "cyan",
    ctaType: "reusable",
    image: "/proyectos/autoframe.jpg",
    title: {
      es: "Autoframe: convierte cualquier foto en formato cuadrado",
      en: "Autoframe: turns any photo into square format",
    },
    short: {
      es: "Adapta automáticamente imágenes de cualquier proporción a un formato cuadrado, generando un marco a partir de los colores de sus propios bordes y sin recortar la fotografía.",
      en: "Automatically adapts images of any aspect ratio to a square format, generating a frame from the photo's own edge colors without cropping it.",
    },
    problem: {
      es: "Publicar fotos en el formato cuadrado de Instagram casi siempre significa recortar partes de la imagen, o dejar barras blancas o negras que se ven poco cuidadas.",
      en: "Publishing photos in Instagram's square format almost always means cropping parts of the image, or leaving plain white or black bars that look unpolished.",
    },
    approach: {
      es: "App Android en Kotlin con Jetpack Compose. El algoritmo (propio, sin librerías de visión) muestrea los píxeles cerca de los bordes de la foto para estimar su color ahí — más preciso que el color dominante de toda la imagen — y dibuja un degradé lineal desde ese color hacia el centro, generando el lienzo cuadrado 1:1. Conserva los metadatos EXIF originales y permite guardar en Drive, OneDrive o almacenamiento local.",
      en: "An Android app in Kotlin with Jetpack Compose. The algorithm (custom-built, no vision libraries) samples pixels near the photo's own edges to estimate the color there — more precise than the whole image's dominant color — and draws a linear gradient from that color toward the center, producing the square 1:1 canvas. It preserves the original EXIF metadata and can save to Drive, OneDrive, or local storage.",
    },
    stack: ["Kotlin", "Jetpack Compose", "Canvas/LinearGradient nativo", "ExifInterface", "Storage Access Framework", "Coil"],
    result: {
      es: "Fotos publicables en formato cuadrado sin perder ni un pixel del encuadre original, con un acabado que se ve intencional.",
      en: "Photos ready for square format without losing a single pixel of the original framing, with a finish that looks intentional.",
    },
    flow: [
      { es: "Selecciona la foto en cualquier proporción", en: "Select a photo in any aspect ratio" },
      { es: "Estima el color en sus bordes", en: "Estimates the color at its edges" },
      { es: "Genera el degradé hacia el centro", en: "Generates the gradient toward the center" },
      { es: "Exporta el cuadro 1:1 con EXIF intacto", en: "Exports the 1:1 canvas with EXIF intact" },
    ],
  },
  {
    slug: "legend-forge",
    category: "automatizacion",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/legend-forge.png",
    title: {
      es: "Legend Forge: creación de personajes de D&D asistida por IA",
      en: "Legend Forge: AI-assisted D&D character creation",
    },
    short: {
      es: "Guía al usuario paso a paso, automatiza los cálculos según las reglas de D&D 2024 y genera una ficha lista para imprimir, acompañada de una imagen del personaje creada con IA.",
      en: "Guides the user step by step, automates calculations per the D&D 2024 rules, and generates a print-ready sheet along with an AI-generated character image.",
    },
    problem: {
      es: "Crear una ficha de personaje de Dungeons & Dragons a mano, revisando manuales y calculando modificadores, toma entre 2 y 4 horas — un obstáculo real para empezar a jugar.",
      en: "Filling out a Dungeons & Dragons character sheet by hand — flipping through rulebooks and calculating modifiers — takes 2 to 4 hours, a real barrier to just getting a game started.",
    },
    approach: {
      es: "App multiplataforma (React Native/Expo, funciona en Android y como web para PC) con una capa de datos propia que codifica el reglamento completo de D&D 2024 (especies, clases, trasfondos, dotes, hechizos, equipamiento) en 17 módulos. Un diálogo guiado de preguntas simples arma el personaje, un motor con pdf-lib rellena programáticamente la hoja oficial en PDF, y un módulo aparte construye un prompt de imagen extremadamente detallado a partir de los mismos datos del personaje (sin inventar nada fuera de la ficha) para generar su retrato con Gemini.",
      en: "A cross-platform app (React Native/Expo, works on Android and as a web build for PC) with a custom data layer encoding the full D&D 2024 ruleset (species, classes, backgrounds, feats, spells, equipment) across 17 modules. A guided dialogue of simple questions builds the character, a pdf-lib-based engine programmatically fills the official PDF sheet, and a separate module builds an extremely detailed image prompt from that same character data (inventing nothing beyond the sheet) to generate a portrait via Gemini.",
    },
    stack: ["React Native", "Expo", "react-native-web", "pdf-lib", "Gemini (generación de imagen)"],
    result: {
      es: "De 2-4 horas a menos de 15 minutos, con ficha oficial completa, historia del personaje y retrato generado a partir de sus propios datos.",
      en: "From 2-4 hours down to under 15 minutes, with a complete official sheet, character backstory, and a portrait generated from its own data.",
    },
    flow: [
      { es: "Diálogo guiado de preguntas simples", en: "Guided dialogue of simple questions" },
      { es: "Calcula reglas oficiales de D&D 2024", en: "Calculates official D&D 2024 rules" },
      { es: "Rellena el PDF oficial", en: "Fills out the official PDF" },
      { es: "Construye el prompt de imagen desde la ficha", en: "Builds the image prompt from the sheet" },
      { es: "Genera el retrato del personaje", en: "Generates the character portrait" },
    ],
  },
  {
    slug: "vector-content-engine",
    category: "automatizacion",
    color: "cyan",
    ctaType: "specific",
    image: "/proyectos/vector-content-engine.png",
    title: {
      es: "Motor de contenido para LinkedIn de VECTOR Estrategia",
      en: "Content engine for VECTOR Estrategia's LinkedIn",
    },
    short: {
      es: "Pipeline automatizado que identifica noticias relevantes, genera textos e imágenes con IA y prepara publicaciones para LinkedIn, manteniendo aprobación humana antes de publicar.",
      en: "An automated pipeline that identifies relevant news, generates copy and images with AI, and prepares LinkedIn posts — keeping human approval before anything is published.",
    },
    problem: {
      es: "Mantener una cadencia constante de publicaciones relevantes en LinkedIn para una consultora nueva, sin dedicarle horas cada día a buscar noticias y redactar desde cero.",
      en: "Keeping a steady cadence of relevant LinkedIn posts for a new consultancy, without spending hours every day hunting for news and writing from scratch.",
    },
    approach: {
      es: "La lógica se prototipó en n8n local y se llevó a producción como GitHub Actions + Cloudflare Workers, sin depender de un servidor n8n encendido 24/7. Revisa varias fuentes RSS, usa Gemini 2.0 Flash para elegir el artículo más relevante según los criterios de audiencia de VECTOR, redacta el post, genera la imagen con Ideogram, y lo manda a Telegram con botones de aprobación antes de tocar LinkedIn. Una tarea programada de lunes a viernes, usando Claude en Chrome, publica el artículo aprobado más antiguo sin publicar, tal cual — sin editar texto ni imagen en esa etapa.",
      en: "The logic was prototyped in local n8n and moved to production as GitHub Actions + Cloudflare Workers, with no need for an n8n server running 24/7. It checks several RSS sources, uses Gemini 2.0 Flash to pick the most relevant article against VECTOR's audience criteria, drafts the post, generates the image with Ideogram, and sends it to Telegram with approval buttons before it ever touches LinkedIn. A Monday-to-Friday scheduled task, using Claude in Chrome, publishes the oldest approved-but-unpublished article as-is — no text or image edits at that stage.",
    },
    stack: ["n8n (prototipado)", "GitHub Actions", "Cloudflare Workers", "Gemini 2.0 Flash", "Ideogram", "Telegram Bot API", "Claude en Chrome"],
    result: {
      es: "Publicaciones constantes en LinkedIn con control humano en cada pieza, sin mantener infraestructura corriendo todo el tiempo.",
      en: "A steady stream of LinkedIn posts with human control over every piece, without keeping any infrastructure running around the clock.",
    },
    flow: [
      { es: "Revisa fuentes RSS", en: "Checks RSS sources" },
      { es: "Gemini elige el artículo más relevante", en: "Gemini picks the most relevant article" },
      { es: "Redacta post e imagen", en: "Drafts post and image" },
      { es: "Aprobación por Telegram", en: "Approval via Telegram" },
      { es: "Publicación programada en LinkedIn", en: "Scheduled LinkedIn publish" },
    ],
  },
  {
    slug: "vector-estrategia",
    category: "agentes",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/vector-estrategia.jpg",
    title: {
      es: "Sitio web de VECTOR Estrategia",
      en: "VECTOR Estrategia website",
    },
    short: {
      es: "Sitio web de una consultoría de competitividad apoyada en IA, diseñado y desarrollado para atender a PYMEs y profesionales independientes.",
      en: "Website for an AI-supported competitiveness consultancy, designed and developed to serve SMEs and independent professionals.",
    },
    problem: {
      es: "VECTOR Estrategia necesitaba una presencia web que transmitiera su propuesta —consultoría de competitividad con IA— con una identidad visual propia y sólida.",
      en: "VECTOR Estrategia needed a web presence that conveyed its proposition — AI-powered competitiveness consulting — with a solid, distinctive visual identity.",
    },
    approach: {
      es: "Sitio construido con Vite, React y React Router, con GSAP, Framer Motion y Lenis para animación y scroll suave. Se trabajó de la mano en cada sección: mensaje, estructura de servicios y evaluación de madurez en IA.",
      en: "Built with Vite, React, and React Router, with GSAP, Framer Motion, and Lenis for animation and smooth scroll. Every section — messaging, service structure, and the AI-maturity assessment — was worked through together.",
    },
    stack: ["Vite", "React", "React Router", "GSAP", "Framer Motion", "Lenis"],
    result: {
      es: "Sitio en producción que sirve de vitrina y de entrada al embudo comercial de VECTOR Estrategia.",
      en: "A production site that serves as VECTOR Estrategia's showcase and the entry point to its sales funnel.",
    },
    flow: [
      { es: "Definición de mensaje y estructura", en: "Messaging and structure defined" },
      { es: "Diseño del sistema visual", en: "Visual system design" },
      { es: "Construcción con Vite + React", en: "Built with Vite + React" },
      { es: "Animación con GSAP y Lenis", en: "Animation with GSAP and Lenis" },
      { es: "Publicación en Vercel", en: "Published on Vercel" },
    ],
  },
  {
    slug: "vaticine",
    category: "analisis",
    color: "cyan",
    ctaType: "reusable",
    image: "/proyectos/vaticine.jpg",
    title: {
      es: "vatiCINE: predicción y votación colaborativa de los Oscar",
      en: "vatiCINE: collaborative Oscar prediction and voting",
    },
    short: {
      es: "Reúne las nominaciones, referencias de IMDb y Rotten Tomatoes, permite registrar predicciones y preferencias por categoría y genera un informe final con los resultados.",
      en: "Brings together nominations and IMDb/Rotten Tomatoes references, lets users record predictions and preferences per category, and generates a final results report.",
    },
    problem: {
      es: "Comparar predicciones sobre quién ganaría cada categoría del Oscar entre un grupo de amigos, y después saber quién acertó más, se hacía a mano y se perdía el registro.",
      en: "Comparing predictions about who'd win each Oscar category among a group of friends, and later checking who called it best, used to be done by hand — and the record got lost.",
    },
    approach: {
      es: "Aplicación Next.js con Supabase para autenticación y base de datos: cada usuario logueado vota, por categoría, quién cree que ganará y cuál fue su favorita, viendo el póster oficial y las calificaciones de IMDb y Rotten Tomatoes de cada nominada. Al cierre, genera un PDF bien maquetado (pdf-lib + fontkit) con el resumen de las votaciones para compartir entre amigos.",
      en: "A Next.js app with Supabase for authentication and the database: each logged-in user votes, per category, on who they think will win and which was their favorite, seeing each nominee's official poster and IMDb/Rotten Tomatoes scores. At the close, it generates a well-laid-out PDF (pdf-lib + fontkit) summarizing the votes to share with friends.",
    },
    stack: ["Next.js", "Supabase", "pdf-lib", "fontkit"],
    result: {
      es: "Un ritual anual con los amigos: votar, ver quién acertó más, y guardar el PDF como recuerdo de esa edición del Oscar.",
      en: "An annual ritual with friends: vote, see who called it best, and keep the PDF as a memento of that year's Oscars.",
    },
    flow: [
      { es: "Usuario inicia sesión", en: "User logs in" },
      { es: "Vota ganador y favorita por categoría", en: "Votes winner and favorite per category" },
      { es: "Se cierran las votaciones", en: "Voting closes" },
      { es: "Genera el PDF de resultados", en: "Generates the results PDF" },
    ],
  },
  {
    slug: "todoist-bowl",
    category: "agentes",
    color: "cyan",
    ctaType: "reusable",
    image: "/proyectos/todoist.jpg",
    title: {
      es: "El Bowl de los Papelitos: generador de planes para parejas y grupos",
      en: "The Bowl of Notes: a plan generator for couples and groups",
    },
    short: {
      es: "Aplicación que reúne propuestas de todos los participantes, selecciona una al azar cuando hace falta decidir y mantiene un historial de las experiencias realizadas.",
      en: "An app that gathers plan proposals from every participant, randomly selects one when a decision is needed, and keeps a history of completed experiences.",
    },
    problem: {
      es: "En pareja o entre amigos, siempre surge la pregunta de qué hacer un día cualquiera, y las ideas buenas se olvidan o nunca se anotan en ningún lado.",
      en: "Among couples or friends, the question of what to do on any given day always comes up, and good ideas get forgotten or never written down anywhere.",
    },
    approach: {
      es: "Sitio en React con TanStack Router y Tailwind, con autenticación propia. Cada persona escribe un plan en secreto y lo deja caer en el bowl del grupo o pareja; cuando alguien tira del azar, sale un plan al azar y se propone. Los planes ya hechos van quedando en una bitácora que sirve como recordatorio de las aventuras vividas juntos.",
      en: "A React site with TanStack Router and Tailwind, with its own authentication. Each person writes a plan in secret and drops it into the group's or couple's bowl; when someone pulls the lever, a random plan comes out and gets proposed. Completed plans get logged into a running record — a reminder of the adventures lived together.",
    },
    stack: ["React", "TanStack Router", "Tailwind CSS"],
    result: {
      es: "Nunca más 'no sé qué hacer', y una bitácora que se vuelve un lindo registro de recuerdos compartidos.",
      en: "Never 'I don't know what to do' again, and a log that becomes a nice record of shared memories.",
    },
    flow: [
      { es: "Cada persona aporta un plan en secreto", en: "Each person drops in a secret plan" },
      { es: "Se sortea un plan al azar", en: "A plan is drawn at random" },
      { es: "El grupo lo vive", en: "The group lives it out" },
      { es: "Queda registrado en la bitácora", en: "It's logged in the record" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
