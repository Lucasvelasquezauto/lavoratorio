export type Category = "automatizacion" | "analisis" | "agentes" | "exploracion";

export interface FlowStep {
  es: string;
  en: string;
}

export interface ProjectVideo {
  src: string;
  poster: string;
  label: { es: string; en: string };
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
  videos?: ProjectVideo[];
  gallery?: string[];
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
    videos: [
      {
        src: "/proyectos/media/ticinco.mp4",
        poster: "/proyectos/media/poster-ticinco.jpg",
        label: { es: "Demo — Ticinco (T5)", en: "Demo — Ticinco (T5)" },
      },
    ],
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
    videos: [
      {
        src: "/proyectos/media/radiola.mp4",
        poster: "/proyectos/media/poster-radiola.jpg",
        label: { es: "Demo — Radiola", en: "Demo — Radiola" },
      },
    ],
    title: {
      es: "Radiola: juego musical integrado con Spotify",
      en: "Radiola: a music game integrated with Spotify",
    },
    short: {
      es: "Juego híbrido para 2 a 10 personas que convierte las propias playlists de Spotify de cada grupo en retos para adivinar canciones, inspirado en la experiencia de las rockolas de los años 90.",
      en: "A hybrid game for 2 to 10 people that turns each group's own Spotify playlists into song-guessing challenges, inspired by the jukebox experience of the 90s.",
    },
    problem: {
      es: "Quería recrear la mecánica de Rockola, un juego de mesa de los 90, pero con la música real de cada grupo — no un mazo fijo de canciones que pierde interés rápido.",
      en: "I wanted to recreate the mechanics of Rockola, a 90s board game, but with each group's real music — not a fixed deck of songs that quickly loses its appeal.",
    },
    approach: {
      es: "App nativa de Android en Kotlin con Jetpack Compose, con autenticación OAuth contra la Spotify Web API para leer las playlists del usuario. Implementé ocho tipos de reto (banda, mímica, dueto, productor, pista, cita, ritmo, canto). El más complejo fue 'Pégate a la banda': busca la canción actual en el catálogo público de Deezer, la empareja por artista y título filtrando remixes, feats y versiones en vivo que confunden la búsqueda, descarga el preview real en segundo plano y lo reproduce durante exactamente 10 segundos antes de cortarlo. Uso Room y Firebase para guardar partidas y sincronizar datos.",
      en: "A native Android app in Kotlin with Jetpack Compose, using OAuth authentication against the Spotify Web API to read the user's playlists. I implemented eight challenge types (band, mime, duet, producer, clue, quote, rhythm, sing). The hardest one to build was 'Pégate a la banda' (Join the Band): it looks up the current song in Deezer's public catalog, matches it by artist and title while filtering out remixes, features, and live versions that confuse the search, downloads the real preview in the background, and plays it for exactly 10 seconds before cutting it off. I use Room and Firebase to save games and sync data.",
    },
    stack: ["Kotlin", "Jetpack Compose", "Spotify Web API (OAuth)", "Deezer API (previews)", "Room", "Firebase Firestore", "WorkManager"],
    result: {
      es: "Ocho mecánicas de reto ya implementadas, con reproducción real de audio y playlists personalizadas por jugador vía Spotify.",
      en: "Eight challenge mechanics already implemented, with real audio playback and per-player Spotify playlists.",
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
    videos: [
      {
        src: "/proyectos/media/timerflow.mp4",
        poster: "/proyectos/media/poster-timerflow.jpg",
        label: { es: "Demo — Timerflow", en: "Demo — Timerflow" },
      },
    ],
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
      es: "Uso diario sin fricción ni anuncios, con exactamente la configuración que la rutina necesita.",
      en: "Daily use with zero friction and no ads, with exactly the configuration each routine needs.",
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
    gallery: [
      "/proyectos/media/autoframe-perrita-1.jpg",
      "/proyectos/media/autoframe-perrita-2.jpg",
      "/proyectos/media/autoframe-perrita-3.jpg",
    ],
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
      es: "Un proceso que se repite cada año: votar, comparar aciertos, y guardar el PDF con los resultados de esa edición.",
      en: "A process repeated every year: vote, compare who called it best, and keep the PDF with that edition's results.",
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
      es: "Resuelve la indecisión del día a día, y la bitácora queda como historial de los planes ya vividos.",
      en: "Solves day-to-day indecision, and the log becomes a history of plans already lived out.",
    },
    flow: [
      { es: "Cada persona aporta un plan en secreto", en: "Each person drops in a secret plan" },
      { es: "Se sortea un plan al azar", en: "A plan is drawn at random" },
      { es: "El grupo lo vive", en: "The group lives it out" },
      { es: "Queda registrado en la bitácora", en: "It's logged in the record" },
    ],
  },
  {
    slug: "automatizacion-blog-redes",
    category: "automatizacion",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/automatizacion-blog-redes.png",
    title: {
      es: "Automatización de contenido para blog y redes sociales",
      en: "Content automation for blog and social media",
    },
    short: {
      es: "Sistema de automatización 100% local que rastrea noticias, permite elegir un tema y genera borradores de blog, LinkedIn y X en un estilo editorial definido, con Notion como base de datos central.",
      en: "A fully local automation system that tracks news, lets me pick a topic, and drafts blog, LinkedIn, and X posts in a defined editorial style, with Notion as the central database.",
    },
    problem: {
      es: "Las herramientas de automatización en la nube resultaban costosas para un flujo editorial recurrente, y dependía de revisar manualmente varias fuentes de noticias antes de poder escribir sobre algún tema.",
      en: "Cloud automation tools were costly for a recurring editorial workflow, and it required manually checking multiple news sources before writing about any topic.",
    },
    approach: {
      es: "Activepieces, corriendo en Docker junto con Ollama (modelos Qwen2.5 14B y 32B locales), orquesta tres flujos: el primero rastrea fuentes RSS de áreas definidas y descarta duplicados; el segundo presenta los candidatos en Cockpit, una aplicación web propia desde la que elijo un tema, resume la selección en Notion y genera los borradores de blog, LinkedIn y X en el estilo editorial definido; el tercero publica el artículo, comparte automáticamente en LinkedIn y me envía por Telegram el borrador de X para revisión y publicación manual, dejando el estado de cada canal registrado en Notion.",
      en: "Activepieces, running in Docker alongside Ollama (local Qwen2.5 14B and 32B models), orchestrates three flows: the first tracks RSS sources across defined topic areas and filters out duplicates; the second surfaces the candidates in Cockpit, a custom web app where I pick a topic, then summarizes the selection in Notion and drafts the blog, LinkedIn, and X posts in the defined editorial style; the third publishes the article, shares it automatically on LinkedIn, and sends the X draft to me via Telegram for review and manual posting, logging each channel's status back in Notion.",
    },
    stack: ["Docker", "Activepieces", "Ollama", "Notion API", "React"],
    result: {
      es: "Un flujo editorial que corre sin costos de nube, desde el rastreo de noticias hasta la publicación en dos de tres canales.",
      en: "An editorial workflow that runs with no cloud costs, from news tracking to publishing on two of three channels.",
    },
    flow: [
      { es: "Rastrea RSS por áreas definidas", en: "Tracks RSS by defined topic areas" },
      { es: "Filtra duplicados y lista candidatos en Cockpit", en: "Filters duplicates and lists candidates in Cockpit" },
      { es: "Selecciono un tema desde Cockpit", en: "I pick a topic from Cockpit" },
      { es: "Resume en Notion y redacta blog, LinkedIn y X", en: "Summarizes in Notion and drafts blog, LinkedIn, and X copy" },
      { es: "Publica blog y LinkedIn; envía X por Telegram", en: "Publishes blog and LinkedIn; sends X draft via Telegram" },
    ],
  },
  {
    slug: "poemas-animados-ia-local",
    category: "exploracion",
    color: "cyan",
    ctaType: "specific",
    image: "/proyectos/animacion-poemas.jpg",
    videos: [
      {
        src: "/proyectos/media/perderte.mp4",
        poster: "/proyectos/media/poster-perderte.jpg",
        label: { es: "Al perderte — Ernesto Cardenal", en: "Al perderte — Ernesto Cardenal (poem)" },
      },
      {
        src: "/proyectos/media/buscarte.mp4",
        poster: "/proyectos/media/poster-buscarte.jpg",
        label: { es: "No Buscarte — poema propio", en: "No Buscarte — original poem" },
      },
    ],
    title: {
      es: "Animación de poemas con IA generativa local",
      en: "Poem animation with local generative AI",
    },
    short: {
      es: "Dos poemas —uno de Ernesto Cardenal, otro propio— convertidos en animaciones verticales mediante interpolación de fotogramas, con narración propia procesada con las herramientas de IA de Adobe.",
      en: "Two poems—one by Ernesto Cardenal, one of my own—turned into vertical animations through frame interpolation, narrated in my own voice and polished with Adobe's AI audio tools.",
    },
    problem: {
      es: "Los generadores de video por IA en la nube cobran por segundo y limitan la duración de cada clip, lo que hacía inviable animar un poema completo con una narración de más de un minuto sin un costo elevado.",
      en: "Cloud AI video generators charge per second and cap each clip's length, making it costly to animate a full poem with over a minute of narration.",
    },
    approach: {
      es: "Diseñé el storyboard de cada poema —una secuencia de ilustraciones por escena— con el generador de imágenes de Gemini (Nano Banana). Localmente, en ComfyUI, encadené esas imágenes y usé el nodo FILM VFI (paquete ComfyUI-Frame-Interpolation, checkpoint film_net_fp32) para interpolar los fotogramas de transición entre cada par, agregando tramos de espera al inicio y al final para dar tiempo a la lectura, y exporté la secuencia final con VideoHelperSuite. La narración, grabada con mi propia voz, se procesó con Adobe Enhance Speech para limpiar el audio antes de integrarla al video.",
      en: "I designed each poem's storyboard—a sequence of scene illustrations—with Gemini's image generator (Nano Banana). Locally, in ComfyUI, I chained those images together and used the FILM VFI node (ComfyUI-Frame-Interpolation package, film_net_fp32 checkpoint) to interpolate the transition frames between each pair, adding hold segments at the start and end to give the narration room to breathe, and exported the final sequence with VideoHelperSuite. The narration, recorded in my own voice, was processed with Adobe Enhance Speech to clean up the audio before combining it with the video.",
    },
    stack: ["Gemini (Nano Banana)", "ComfyUI", "ComfyUI-Frame-Interpolation (FILM)", "VideoHelperSuite (VHS)", "Adobe Enhance Speech"],
    result: {
      es: "Dos animaciones de 24 y 69 segundos —muy por encima de los límites típicos de los generadores de video en la nube— sin costo de suscripción ni de cómputo en la nube.",
      en: "Two animations of 24 and 69 seconds—well beyond the typical limits of cloud video generators—with no subscription or cloud compute cost.",
    },
    flow: [
      { es: "Storyboard con Gemini (Nano Banana)", en: "Storyboard designed with Gemini (Nano Banana)" },
      { es: "Interpolación de fotogramas en ComfyUI (FILM VFI)", en: "Frame interpolation in ComfyUI (FILM VFI)" },
      { es: "Ensamblado de la secuencia con tramos de espera", en: "Sequence assembled with hold segments" },
      { es: "Narración propia procesada con Adobe Enhance Speech", en: "Own narration processed with Adobe Enhance Speech" },
      { es: "Exportación del video final", en: "Final video export" },
    ],
  },
  {
    slug: "tribuna-sur",
    category: "agentes",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/tribuna-sur.jpg",
    gallery: [
      "/proyectos/media/tribuna-sur-1.jpg",
      "/proyectos/media/tribuna-sur-2.jpg",
    ],
    title: {
      es: "Tribuna Sur — agenda diaria de fútbol con canal de transmisión",
      en: "Tribuna Sur — a daily football schedule with where to watch",
    },
    short: {
      es: "Aplicación web personal que cada día muestra qué partidos de fútbol hay, si ya terminaron o a qué hora empiezan, y en qué canal o plataforma de streaming se transmiten en Colombia — con favoritos por equipo sin importar el torneo.",
      en: "A personal web app that shows, every day, which football matches are on, whether they've finished or what time they start, and which TV channel or streaming platform carries them in Colombia — with team favorites that follow across tournaments.",
    },
    problem: {
      es: "Saber qué partidos hay hoy es fácil; saber en qué canal colombiano se transmiten no lo es. Ninguna app deportiva internacional resuelve ese dato para el mercado local, así que terminaba buscándolo a mano, torneo por torneo, cada día.",
      en: "Knowing which matches are on today is easy; knowing which Colombian channel carries them isn't. No international sports app solves that for the local market, so I ended up looking it up by hand, tournament by tournament, every day.",
    },
    approach: {
      es: "Arquitectura de presupuesto $0: Supabase (Postgres) es la única fuente de verdad, alimentada por jobs de GitHub Actions en horarios escalonados; el frontend nunca llama directamente a una API deportiva ni a un modelo de IA, solo lee la base de datos. football-data.org cubre resultados y horarios de los torneos europeos; para el dato que ninguna API resuelve —el canal de transmisión en Colombia— y para los torneos sin cobertura estructurada (Liga y Copa Betplay, Libertadores, Sudamericana, Europa League), un job descarga texto de fuentes específicas y se lo pasa a Gemini u OpenRouter con un esquema JSON fijo, nunca con 'busca en internet y responde', para evitar que el modelo invente datos. La cobertura de Liga y Copa Betplay resultó ser la más difícil: terminé usando la API de búsqueda Tavily restringida a una lista curada de medios colombianos confiables, con una salvaguarda en base de datos que evita duplicar un partido cuando una fuente lo reporta con una fecha distinta a otra (típico de reprogramaciones). Los escudos de los equipos favoritos se buscan una sola vez, la primera vez que alguien favoritea un equipo, y quedan guardados en Supabase mediante un permiso de escritura acotado a esa sola columna. El frontend es HTML/CSS/JS plano, sin framework ni paso de build, desplegado en Vercel.",
      en: "$0-budget architecture: Supabase (Postgres) is the single source of truth, fed by staggered GitHub Actions jobs; the frontend never calls a sports API or an AI model directly, it only reads the database. football-data.org covers fixtures and results for the European tournaments; for the piece no API solves — TV channel in Colombia — and for the tournaments with no structured coverage (Liga and Copa Betplay, Libertadores, Sudamericana, Europa League), a job downloads text from specific sources and feeds it to Gemini or OpenRouter with a fixed JSON schema, never open 'search the web and answer,' to keep the model from inventing data. Liga and Copa Betplay turned out to be the hardest to cover: I ended up using the Tavily search API restricted to a curated list of trusted Colombian outlets, with a database safeguard that stops the same match from being saved twice when one source reports a different date than another (typical of reschedules). Favorite teams' crests are looked up once, the first time someone favorites a team, and cached in Supabase through a write permission scoped to that single column. The frontend is plain HTML/CSS/JS, no framework or build step, deployed on Vercel.",
    },
    stack: ["Supabase (Postgres)", "GitHub Actions", "football-data.org API", "Gemini", "OpenRouter", "Tavily API", "Playwright", "Vercel"],
    result: {
      es: "App en producción con 9 torneos activos, actualización automática varias veces por semana, ventana de favoritos de 14 días y escudos de equipo guardados on-demand — sin ningún método de pago vinculado en ningún proveedor.",
      en: "A production app covering 9 active tournaments with automatic updates several times a week, a 14-day favorites window, and on-demand team crests — with no payment method linked to any provider.",
    },
    flow: [
      { es: "Jobs programados leen football-data.org y fuentes específicas por torneo", en: "Scheduled jobs read football-data.org and per-tournament sources" },
      { es: "Gemini u OpenRouter extraen partido, hora y canal en JSON", en: "Gemini or OpenRouter extract match, time, and channel as JSON" },
      { es: "Todo se guarda en Supabase, la única fuente de verdad", en: "Everything is saved to Supabase, the single source of truth" },
      { es: "El frontend lee Supabase directamente y muestra el día", en: "The frontend reads Supabase directly and shows the day" },
      { es: "Favoritos y ajustes se guardan en el navegador", en: "Favorites and settings are saved in the browser" },
    ],
  },
  {
    slug: "memoria",
    category: "agentes",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/memoria.jpg",
    gallery: [
      "/proyectos/media/memoria-1.jpg",
      "/proyectos/media/memoria-2.jpg",
      "/proyectos/media/memoria-3.jpg",
    ],
    title: {
      es: "Memoria — recordatorios y notas de voz para la familia",
      en: "Memoria — a voice memory app for the family",
    },
    short: {
      es: "App para Android, en piloto con mi familia, que guarda lo que dictas por voz —personas, fechas, recetas, pendientes— sin que tengas que organizarlo tú: lo clasifica sola, avisa antes de las fechas importantes y manda citas y tareas a Google.",
      en: "An Android app, piloting with my family, that saves whatever you dictate by voice — people, dates, recipes, to-dos — without you having to organize it: it sorts itself, reminds you before important dates, and sends appointments and tasks to Google.",
    },
    problem: {
      es: "Mis papás tienen las manos ocupadas casi siempre y poca paciencia con apps complicadas. Una nota genérica obliga a escribir, elegir carpeta y acordarse de revisarla; para ellos eso significa que la idea se pierde antes de guardarla.",
      en: "My parents' hands are usually full, and they have little patience for complicated apps. A generic notes app makes you type, pick a folder, and remember to check it; for them that means the idea is gone before it gets saved.",
    },
    approach: {
      es: "App nativa en Expo/React Native para Android. El gesto principal vive en un widget de pantalla de inicio: un toque abre una tarjeta translúcida nativa (sin cargar la app completa) que graba con expo-speech-recognition y guarda. Supabase (Postgres + Edge Functions en Deno) es la única fuente de verdad; una copia local en SQLite deja la app usable sin conexión. Cada nota se clasifica con un modelo gratuito de Groq (gpt-oss-120b/20b o Qwen3), con reintento automático a Cloudflare Workers AI (Qwen3-30B) si Groq falla por límite de uso, y un 'modo simple' de respaldo si ambos fallan, para que la persona nunca vea un error técnico. Los avisos antes de una fecha importante salen por notificaciones push, y citas y tareas se sincronizan con Google Calendar y Google Tasks. El sistema visual —fondo azul petróleo, un 'orbe' cálido como único acento, tipografías Fraunces y Atkinson Hyperlegible Next— sigue WCAG 2.2 AA con texto grande y toques amplios, pensado para usuarios de 40 a 70 años poco familiarizados con la tecnología.",
      en: "Native Expo/React Native Android app. The core gesture lives in a home-screen widget: one tap opens a native translucent card (without loading the full app) that records via expo-speech-recognition and saves. Supabase (Postgres + Deno Edge Functions) is the single source of truth; a local SQLite copy keeps the app usable offline. Each note is classified by a free-tier Groq model (gpt-oss-120b/20b or Qwen3), with automatic fallback to Cloudflare Workers AI (Qwen3-30B) if Groq hits its usage limit, and a backup 'simple mode' if both fail, so the person never sees a technical error. Reminders before an important date go out as push notifications, and appointments and tasks sync to Google Calendar and Google Tasks. The visual system — a deep petrol-blue background, a single warm 'orb' accent, Fraunces and Atkinson Hyperlegible Next typefaces — follows WCAG 2.2 AA with large text and generous tap targets, built for 40-to-70-year-old users who aren't comfortable with technology.",
    },
    stack: [
      "Expo / React Native",
      "Supabase (Postgres + Edge Functions)",
      "SQLite (offline)",
      "Groq",
      "Cloudflare Workers AI",
      "expo-speech-recognition",
      "Google Calendar/Tasks API",
      "Android widgets",
    ],
    result: {
      es: "En piloto familiar desde octubre de 2026: app instalada en el teléfono de mi mamá, con dictado, organización automática y avisos funcionando; costo de operación: $0.",
      en: "In family pilot since October 2026: installed on my mom's phone, with dictation, automatic organization, and reminders working; operating cost: $0.",
    },
    flow: [
      { es: "Un toque en el widget abre la tarjeta y graba la voz", en: "One tap on the widget opens the card and records your voice" },
      { es: "expo-speech-recognition transcribe en el teléfono", en: "expo-speech-recognition transcribes on the phone" },
      { es: "Un modelo de Groq (o Cloudflare si falla) clasifica y organiza la nota", en: "A Groq model (or Cloudflare if it fails) classifies and organizes the note" },
      { es: "Todo se guarda en Supabase y se cachea en SQLite local", en: "Everything is saved to Supabase and cached in local SQLite" },
      { es: "Avisos antes de fechas importantes y sincronización con Google", en: "Reminders before important dates and sync with Google" },
    ],
  },
  {
    slug: "trading-cripto",
    category: "analisis",
    color: "cyan",
    ctaType: "specific",
    image: "/proyectos/trading-cripto.jpg",
    gallery: [
      "/proyectos/media/trading-cripto-1.jpg",
      "/proyectos/media/trading-cripto-2.jpg",
      "/proyectos/media/trading-cripto-3.jpg",
    ],
    title: {
      es: "Simulador de trading en cripto — probar antes de arriesgar dinero real",
      en: "A crypto trading simulator — testing before risking real money",
    },
    short: {
      es: "Quería invertir en bitcoin y ether de forma activa, no solo comprar y olvidarme. Antes de poner un dólar real, probé varias estrategias contra nueve años de precios reales, descarté las que no funcionaban, y ahora dejo correr sola —todos los días, sin que yo intervenga— la única que sí pasó la prueba, con dinero simulado, para comprobar que funciona también en vivo.",
      en: "I wanted to invest in bitcoin and ether actively, not just buy and forget. Before putting in a single real dollar, I tested several strategies against nine years of real prices, discarded the ones that didn't work, and now let the one that did pass the test run on its own — every day, with no intervention from me — using simulated money, to confirm it also holds up live.",
    },
    problem: {
      es: "Había descartado quedarme quieto con una inversión a largo plazo: quería operar de forma activa. Pero no quería confiar una decisión de dinero real a una corazonada, ni a lo primero que pareciera funcionar en un par de meses buenos. Necesitaba una forma de separar lo que de verdad funciona de lo que solo se ve bien en retrospectiva, y de comprobarlo en la práctica antes de arriesgar nada.",
      en: "I'd already ruled out sitting still with a long-term investment: I wanted to trade actively. But I didn't want to trust a real-money decision to a hunch, or to the first thing that looked good over a couple of good months. I needed a way to separate what actually works from what only looks good in hindsight, and to prove it in practice before risking anything.",
    },
    approach: {
      es: "El proyecto se construyó en tres fases con reglas fijadas por escrito antes de ver resultados, para no acomodarlas después. Fase 1 (estudio histórico, 2017–2026, partido en un periodo de diseño y uno de examen que no se toca hasta el final): se probaron cuatro hipótesis con costos reales de Binance (comisión + deslizamiento). Tres se descartaron con los números en la bitácora del proyecto: cobrar la tasa de financiación de los perpetuos (ganaba en el diseño pero se comprimió desde 2025, documentado también en fuentes públicas); una estrategia de ciclo basada en el percentil del MVRV (pasaba la prueba pero operaba solo 2–4 veces en 9 años, muestra insuficiente); y ampliar la estrategia ganadora a las 10 criptos más grandes de 2020 (diluía el resultado frente a quedarse solo con BTC+ETH). También se probó —y se descartó— vender en corto en el perpetuo dentro de la misma estrategia de tendencia: perdía en todas las variantes frente a solo comprar. La que sí pasó —gana al 11% anual de referencia (un CDT en pesos) después de costos, en las dos mitades del periodo de examen y sin su mejor mes— es una estrategia de tendencia: promedio de 8 señales (precio sobre su media de 50, 100 y 200 días; media de 20 sobre la de 100; dirección de las últimas 4, 8 y 13 semanas; ruptura del máximo de 20 días) en BTC y ETH, mitad y mitad, solo compra, rebalanceando si el peso de un activo se desvía 10 puntos de su objetivo. Fase 2 (la que corre hoy): un bot en Python (solo librería estándar, sin dependencias) programado como tarea diaria de Windows descarga el precio de cierre de Binance, calcula las 8 señales y ajusta dos libros simulados de $100 —uno siguiendo la estrategia, otro de referencia con 'mantener BTC+ETH'— con las mismas reglas de ejecución que tendría dinero real: comisión del 0,1%, tamaño mínimo de orden de $5 y pasos de cantidad de Binance. Un tercer libro 'ideal' corre en paralelo con precios de cierre puros, para medir si la práctica en vivo se parece a lo que predijo el estudio histórico. Todo se vuelca en un informe HTML autocontenido (sin backend: se reconstruye cada día desde archivos JSON) que Lucas abre desde un acceso directo en su escritorio, con el estado de los dos libros, una gráfica de su evolución, y una cuenta regresiva con 5 condiciones objetivas —duración mínima, cantidad de ajustes, qué tan cerca va la práctica del libro ideal, puntualidad de las revisiones del bot, y cero errores recientes— que deben cumplirse antes de considerar pasar a dinero real.",
      en: "The project was built in three phases with rules fixed in writing before seeing any results, so they couldn't be bent afterward to fit them. Phase 1 (historical study, 2017–2026, split into a design period and an untouched test period held back until the end): four hypotheses were tested against real Binance costs (commission + slippage). Three were discarded, with the numbers logged in the project's record: collecting the perpetual futures funding rate (it won in the design period but has compressed since 2025, also documented in public sources); a cycle strategy based on the MVRV percentile (it technically passed but only traded 2–4 times in 9 years — too small a sample to trust); and extending the winning strategy to the 10 largest cryptocurrencies of 2020 (it diluted returns compared to sticking with just BTC+ETH). Shorting the perpetual within the same trend strategy was also tried and dropped — it lost against buy-only in every variant tested. The one that did pass — beating the 11%-a-year reference rate (a peso term deposit) after costs, in both halves of the held-out test period, and even with its best month removed — is a trend-following strategy: the average of 8 signals (price above its 50, 100 and 200-day moving average; 20-day average above the 100-day one; direction over the last 4, 8 and 13 weeks; breakout above the 20-day high) on BTC and ETH, split evenly, buy-only, rebalancing whenever an asset's weight drifts 10 points from its target. Phase 2 (what's running now): a Python bot (standard library only, no dependencies) scheduled as a daily Windows task pulls the Binance closing price, computes the 8 signals, and adjusts two simulated $100 books — one following the strategy, one as a 'hold BTC+ETH' benchmark — under the same execution constraints real money would face: 0.1% commission, a $5 minimum order size, and Binance's quantity steps. A third 'ideal' book runs in parallel on pure closing prices, to measure whether live practice matches what the historical study predicted. Everything feeds a self-contained HTML report (no backend — it's rebuilt every day from JSON files) that Lucas opens from a desktop shortcut, showing both books' status, a chart of how they've moved, and a countdown with 5 objective conditions — minimum duration, number of adjustments made, how closely practice tracks the ideal book, how punctual the bot's reviews have been, and zero recent errors — that all have to be met before even considering a move to real money.",
    },
    stack: [
      "Python (solo librería estándar)",
      "API histórica de Binance",
      "Programador de tareas de Windows",
      "HTML/CSS generado a medida (sin backend)",
      "MVRV (CoinMetrics) e índice de miedo/codicia (Alternative.me)",
    ],
    result: {
      es: "Día 27 de la práctica (desde el 3 oct 2026): libro de tendencia en $92,06 (-7,9%) contra $90,33 (-9,7%) de mantener BTC+ETH, con 2 de los 5 ajustes necesarios y 2 días para cumplir la duración mínima. La práctica se desvía solo 0,73 puntos del libro ideal (tolerancia: 1,5) y lleva 0 errores en la última semana —las dos señales que de verdad importan antes de considerar dinero real.",
      en: "Day 27 of practice (running since Oct 3, 2026): the trend book at $92.06 (-7.9%) versus $90.33 (-9.7%) for holding BTC+ETH, with 2 of the 5 required adjustments made and 2 days left to reach the minimum duration. Live practice deviates just 0.73 points from the ideal book (tolerance: 1.5), with zero errors in the past week — the two signals that actually matter before real money is even considered.",
    },
    flow: [
      { es: "La tarea de Windows corre el bot solo, todos los días", en: "A Windows task runs the bot on its own, every day" },
      { es: "Descarga el cierre real de Binance y calcula las 8 señales de tendencia", en: "Pulls the real Binance close and computes the 8 trend signals" },
      { es: "Ajusta el libro simulado si el peso se desvía 10 puntos del objetivo", en: "Rebalances the simulated book if weight drifts 10 points from target" },
      { es: "Compara contra 'mantener BTC+ETH' y contra el libro ideal de precios de cierre", en: "Compares against 'hold BTC+ETH' and against the ideal closing-price book" },
      { es: "Reconstruye el informe HTML con el estado y la cuenta regresiva a dinero real", en: "Rebuilds the HTML report with status and the countdown to real money" },
    ],
  },
  {
    slug: "nerve-and-node",
    category: "agentes",
    color: "cyan",
    ctaType: "specific",
    image: "/proyectos/salvacion-celular.jpg",
    gallery: [
      "/proyectos/media/salvacion-celular-1.jpg",
      "/proyectos/media/salvacion-celular-2.jpg",
      "/proyectos/media/salvacion-celular-3.jpg",
    ],
    title: {
      es: "Nerve & Node — un negocio de páginas web operado por un equipo de agentes de IA",
      en: "Nerve & Node — a website business run by a team of AI agents",
    },
    short: {
      es: "Para juntar la plata de un celular nuevo construí, con ayuda de IA, un negocio de verdad: encuentra negocios locales en Estados Unidos, Puerto Rico y Colombia con buenas reseñas en Google pero sin página, les diseña y publica una de verdad con su nombre y sus estrellas, y me prepara el mensaje para preguntarles si les gusta y la compran. Yo le dedico una hora al día; el resto lo hace un equipo de agentes de IA.",
      en: "To save up for a new phone, I built, with AI, an actual business: it finds local businesses across the US, Puerto Rico and Colombia with good Google reviews but no website, designs and publishes a real one using their own name and star rating, and preps the message asking whether they'd like to buy it. I spend one hour a day on it; a team of AI agents does the rest.",
    },
    problem: {
      es: "Necesitaba juntar USD 2.000 para un celular nuevo, trabajando tiempo completo en otra cosa y con solo una hora libre al día. Un trabajo extra tradicional no alcanzaba: hacía falta un negocio que generara ventas de verdad sin que yo tuviera que estar pendiente de él todo el día.",
      en: "I needed to raise $2,000 USD for a new phone while working full-time at something else, with only one spare hour a day. A regular side gig wasn't going to cut it — I needed a business that could produce real sales without me watching over it all day.",
    },
    approach: {
      es: "La idea: encontrar negocios locales con buenas reseñas en Google pero sin página, construirles la página antes de pedirles nada, y cambiar la pregunta de \"¿necesito una web?\" a \"¿me quedo con esta?\". Todo corre sobre Claude Code, con cuatro agentes especializados (buscador, redactor, revisor, vendedor) orquestados por comandos que ejecutan la rutina diaria completa: buscar candidatos, escribir y revisar cada ficha, publicarla y armar el panel de envíos. El buscador exploraba Google Maps con Chrome controlado por el agente; se migró a la API de Google Places (con un tope propio de 900 búsquedas al mes para quedar en el nivel gratuito) para filtrar sin gastar tokens de más, y Chrome quedó solo para leer reseñas, señales de dueño latino, e Instagram o Facebook de cada candidato. El generador de páginas arma cada sitio desde una ficha con 9 temas visuales según el tipo de negocio, 3 o 4 variantes de color extraídas del logo real del negocio y tres estilos de portada, en inglés y español, con un \"sello\" giratorio que muestra la calificación real de Google (las estrellas se llenan en la proporción exacta, nunca redondeadas) y reseñas siempre citadas textualmente. Un agente de control de calidad bloquea antes de publicar: frases de plantilla, estructuras típicas de texto hecho por IA (apoyado en una skill de copywriting externa de 216 mil instalaciones, verificada con tres escáneres de seguridad antes de instalarla), emojis, exceso de puntuación, reseñas mal citadas, bajo contraste y diseños repetidos entre negocios vecinos del mismo nicho. Cada demo se publica de verdad en Cloudflare Pages, con aviso de vista previa, antes de escribirle al dueño. El embudo de ventas vive en un panel que arma los mensajes de WhatsApp, Instagram, Facebook y correo listos para enviar con un clic, respetando topes diarios, horarios legales (TCPA en EE.UU., CAN-SPAM para correo, Ley 2300 en Colombia) y rotando nichos y ciudades para no parecer spam; yo abro ese panel, reviso y envío uno por uno —el sistema nunca manda nada solo— y pego las respuestas en Claude para que prepare el siguiente paso. El precio, la oferta y el idioma del primer mensaje (español con señal latina fuerte, inglés si no) se fueron ajustando con datos reales conforme llegaban las primeras respuestas, y cada decisión y su porqué quedan escritos en una bitácora que cualquier sesión nueva lee antes de seguir.",
      en: "The idea: find local businesses with good Google reviews but no website, build them the site before asking for anything, and turn the question from \"do I need a website?\" into \"do I want to keep this one?\". Everything runs on Claude Code, with four specialized agents (a finder, a writer, a reviewer, a closer) orchestrated by commands that run the full daily routine: find candidates, draft and review each page, publish it, and build the outreach panel. The finder started out browsing Google Maps through an agent-controlled Chrome; it moved to the Google Places API (capped at 900 searches a month to stay on the free tier) to filter candidates without burning tokens, leaving Chrome just for reading reviews, spotting Latino-owner signals, and checking each candidate's Instagram or Facebook. The page generator builds each site from a data file using 9 visual themes by business type, 3-4 color variants pulled from the business's real logo, and three cover styles, in English and Spanish, with a spinning \"seal\" showing the real Google rating (stars fill to the exact proportion, never rounded) and reviews always quoted verbatim. A quality-control agent blocks publication for: template phrasing, the usual tells of AI-written text (backed by an external copywriting skill with 216,000 installs, vetted with three security scanners before installing it), emoji, excess punctuation, misquoted reviews, low contrast, and designs repeated between neighboring businesses in the same niche. Every demo gets genuinely published to Cloudflare Pages, with a preview notice, before the owner ever gets a message. The sales funnel lives in a panel that drafts WhatsApp, Instagram, Facebook and email messages ready to send with one click, respecting daily send caps, legal sending hours (TCPA in the US, CAN-SPAM for email, Colombia's Law 2300), and rotating niches and cities so it never looks like spam; I open that panel, review and send each one by hand — the system never sends anything on its own — and paste replies back to Claude so it can prep the next step. Pricing, the offer, and the first message's language (Spanish with a strong Latino signal, English otherwise) kept getting tuned against real data as the first replies came in, and every decision and its reasoning gets logged so any new session can pick up exactly where it left off.",
    },
    stack: [
      "Claude Code (agentes + skills)",
      "Python",
      "Google Places API",
      "Chrome automatizado",
      "Cloudflare Pages",
      "WhatsApp / Instagram / Facebook / Gmail (envío manual)",
      "PayPal / Bre-B",
    ],
    result: {
      es: "Día 25 de la misión (iniciada el 5 oct 2026): 55 negocios contactados en EE.UU., Puerto Rico y Colombia, 2 respuestas y 2 conversaciones abiertas negociando precio; todavía 0 de las ~6 ventas necesarias para los USD 2.000. El sistema completo —búsqueda, diseño, control de calidad, publicación y panel de envío— corre de punta a punta; ahora se está afinando el mensaje y el precio con los primeros datos reales.",
      en: "Day 25 of the mission (started Oct 5, 2026): 55 businesses contacted across the US, Puerto Rico and Colombia, 2 replies and 2 open conversations negotiating price; still 0 of the roughly 6 sales needed for the $2,000. The full system — search, design, quality control, publishing and the outreach panel — runs end to end; the message and price are now being tuned against the first real data.",
    },
    flow: [
      { es: "El agente buscador encuentra negocios con buenas reseñas y sin web", en: "The finder agent spots businesses with good reviews and no website" },
      { es: "El agente redactor escribe la ficha y el generador arma la página con el tema del nicho", en: "The writer agent drafts the content and the generator builds the page in the niche's theme" },
      { es: "El agente revisor bloquea lo que suena a IA o tiene errores, antes de publicar", en: "The reviewer agent blocks anything that sounds AI-written or has errors, before publishing" },
      { es: "La página se publica de verdad en Cloudflare, con el nombre y las reseñas reales del negocio", en: "The page gets genuinely published on Cloudflare, with the business's real name and reviews" },
      { es: "El panel prepara el mensaje; yo lo reviso y lo envío con un clic, uno por uno", en: "The panel drafts the message; I review and send it with one click, one at a time" },
      { es: "Pego las respuestas en Claude y el agente vendedor prepara el siguiente paso", en: "I paste replies back to Claude and the closer agent preps the next step" },
    ],
  },
  {
    slug: "instagram-ai",
    category: "agentes",
    color: "amber",
    ctaType: "specific",
    image: "/proyectos/instagram-ai.jpg",
    gallery: [
      "/proyectos/media/instagram-ai-1.jpg",
      "/proyectos/media/instagram-ai-2.jpg",
      "/proyectos/media/instagram-ai-3.jpg",
    ],
    title: {
      es: "Infraestructura multiagente que investiga, escribe, anima y publica reels",
      en: "A multi-agent pipeline that researches, writes, animates and publishes reels",
    },
    short: {
      es: "Un sistema que, a partir de un tema, investiga qué funciona de verdad en Instagram, escribe el guion, le pone voz y animación con muñequitos de palitos, y publica el video solo, todos los días, sin que yo tenga que grabar, editar ni estar pendiente — y sin gastar un dólar extra.",
      en: "A system that, starting from a topic, researches what's actually working on Instagram, writes the script, adds voice and stick-figure animation, and publishes the video on its own, every day, without me having to film, edit or watch over it — and without spending an extra dollar.",
    },
    problem: {
      es: "Hacer contenido bueno y constante para redes toma tiempo que no tenía: investigar qué funciona, escribir un guion que enganche, grabarlo o animarlo, ponerle voz y publicarlo a la hora correcta es trabajo de varias personas. Quería una cuenta de Instagram real, con contenido de calidad real, sin convertirme yo en el cuello de botella de cada video.",
      en: "Making good, consistent content for social media takes time I didn't have: researching what works, writing a hook that lands, recording or animating it, voicing it and publishing it at the right time is normally several people's job. I wanted a real Instagram account with genuinely good content, without becoming the bottleneck for every single video.",
    },
    approach: {
      es: "Es un sistema multiagente sobre Claude Code con 8 agentes especializados, cada uno con el modelo que le alcanza (Haiku para ejecutar y revisar, Sonnet para escribir y diseñar, Opus solo para la estrategia), encadenados en 10 pasos reproducibles desde un solo orquestador (/ig). El investigador usa Apify para encontrar perfiles referentes del tema por seguidores e interacción, y baja sus reels más atípicos; un analista le pide a Gemini que vea cada video (Claude nunca procesa fotogramas, solo lee el JSON corto que Gemini devuelve) y saca el gancho, la estructura y el estilo de cada uno. Con eso, un estratega en Opus arma un posicionamiento, pilares de contenido y 15-20 ideas con un banco de ganchos propio; un director de arte lee el logo y los colores de la marca y genera un sistema visual completo y replicable (paleta con tres variantes, tipografías, un personaje mascota, reglas de contraste). Ahí entra la parte más vistosa: un guionista en Opus convierte cada idea aprobada en un JSON de escenas (nunca copia frases de los referentes, solo su mecánica), y un motor de animación hecho en Remotion (React) lo renderiza sin diseñar nada a mano: muñequitos de palitos con 15 poses y 8 expresiones, diálogos con globos, diagramas cuyos nodos aparecen justo cuando la voz los nombra, capturas de la página web del negocio con zoom lento, listas, comparaciones y un CTA animado. La voz es una cadena con respaldo: primero un modelo de voz de Gemini (hay tres, cada uno con su propia cuota diaria gratis) con indicaciones de acento y tono, y si falla la pieza entera pasa a un motor local (Qwen3-TTS) para no depender de un solo proveedor; subtítulos palabra por palabra, música de fondo de Freesound elegida según la emoción de la escena (divertido, tenso, emotivo…) y efectos de sonido se agregan en capas automáticas. Un productor revisa una sola imagen de control por pieza en vez de ver el video completo, para no gastar tokens de más. Todo el sistema corre con presupuesto cero: niveles gratuitos de Apify, Gemini, edge-tts, Remotion, Cloudinary (hosting temporal, se borra tras publicar) y la API oficial de Instagram. La publicación final la hace una tarea de Windows programada —sin Claude— que solo sube lo que quedó en estado \"aprobado\", y un ciclo de métricas (guardados y compartidos, que pesan más que los likes) alimenta la siguiente tanda de ideas. Todo queda en archivos planos, así que cualquier sesión nueva retoma exactamente donde iba.",
      en: "It's a multi-agent system on Claude Code with 8 specialized agents, each running the model it actually needs (Haiku to execute and review, Sonnet to write and design, Opus only for strategy), chained through 10 reproducible steps from a single orchestrator (/ig). The researcher uses Apify to find reference profiles for the topic by followers and engagement, and pulls their most unusual reels; an analyst has Gemini actually watch each video (Claude never processes frames — it only reads the short JSON Gemini returns) and extracts the hook, structure and style of each one. From that, a strategist running on Opus builds a positioning, content pillars and 15-20 ideas with its own hook bank; an art director reads the brand's logo and colors and generates a full, replicable visual system (a palette with three variants, typefaces, a mascot character, contrast rules). That's where the most visible part kicks in: a scriptwriter on Opus turns each approved idea into a scene-by-scene JSON (never copying the references' lines, only their mechanics), and an animation engine built in Remotion (React) renders it with nothing designed by hand: stick figures with 15 poses and 8 expressions, speech-bubble dialogue, diagrams whose nodes appear exactly when the voice names them, slow-zoom screenshots of the business's real website, lists, comparisons and an animated CTA. The voice is a fallback chain: first a Gemini voice model (there are three, each with its own free daily quota) with accent and tone directions, and if it fails the entire piece falls back to a local engine (Qwen3-TTS) so nothing depends on a single provider; word-by-word captions, background music from Freesound picked by the scene's mood (funny, tense, emotional…) and sound effects all get layered in automatically. A producer reviews a single control image per piece instead of watching the full video, to save tokens. The whole system runs on a zero budget: free tiers of Apify, Gemini, edge-tts, Remotion, Cloudinary (temporary hosting, deleted after publishing) and the official Instagram API. The actual publishing is handled by a scheduled Windows task — no Claude involved — that only uploads what's marked \"approved,\" and a metrics loop (saves and shares, which outweigh likes) feeds the next batch of ideas. Everything lives in plain files, so any new session picks up exactly where it left off.",
    },
    stack: [
      "Claude Code (8 agentes + skills)",
      "Apify",
      "Gemini (visión + voz)",
      "Remotion (React)",
      "edge-tts / Qwen3-TTS",
      "Cloudinary",
      "API oficial de Instagram",
      "Freesound",
    ],
    result: {
      es: "Ya corre de punta a punta en la cuenta real @nerveandnode: 36 piezas producidas y 24 publicadas (reels y carruseles) en el primer mes, con voz, animación, música y subtítulos generados sin tocar una cámara ni un editor, a costo $0. Las métricas (guardados y compartidos antes que likes) ya están alimentando la siguiente tanda de ideas.",
      en: "It already runs end to end on the real @nerveandnode account: 36 pieces produced and 24 published (reels and carousels) in the first month, with voice, animation, music and captions generated without touching a camera or an editor, at $0 cost. The metrics (saves and shares before likes) are already feeding the next batch of ideas.",
    },
    flow: [
      { es: "El investigador usa Apify para encontrar referentes y sus reels más atípicos del tema", en: "The researcher uses Apify to find reference accounts and their most unusual reels on the topic" },
      { es: "Un analista le pide a Gemini que vea cada video y saca el gancho y la estructura", en: "An analyst has Gemini watch each video and extracts the hook and structure" },
      { es: "El estratega en Opus propone posicionamiento, pilares y 15-20 ideas", en: "The Opus-powered strategist proposes positioning, pillars and 15-20 ideas" },
      { es: "El guionista convierte cada idea en un guion de escenas en JSON", en: "The scriptwriter turns each idea into a scene-by-scene JSON script" },
      { es: "El motor en Remotion anima palitos, diagramas y capturas con voz, música y subtítulos", en: "The Remotion engine animates stick figures, diagrams and screenshots with voice, music and captions" },
      { es: "Una tarea de Windows publica sola lo aprobado, y las métricas alimentan la siguiente tanda", en: "A Windows task publishes what's approved on its own, and the metrics feed the next batch" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
