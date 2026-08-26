export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: "ser-andi",
    title: "Beca SER ANDI",
    issuer: "EAFIT",
    image: "/certificaciones/beca-ser-andi-eafit.jpg",
  },
  {
    id: "comunicacion-liderazgo",
    title: "Comunicación y liderazgo",
    issuer: "UPB",
    image: "/certificaciones/comunicacion-liderazgo-upb.jpg",
  },
  {
    id: "creatividad-innovacion",
    title: "Creatividad e innovación",
    issuer: "UPB",
    image: "/certificaciones/creatividad-innovacion-upb.jpg",
  },
  {
    id: "gestion-talento",
    title: "Gestión del talento y cultura del liderazgo",
    issuer: "CESDE",
    image: "/certificaciones/gestion-talento-cesde.jpg",
  },
  {
    id: "ia-transformacion",
    title: "IA y transformación digital",
    issuer: "U. Católica de Oriente",
    image: "/certificaciones/ia-transformacion-uco.jpg",
  },
  {
    id: "ia-generativa-msft",
    title: "IA Generativa",
    issuer: "Microsoft",
    image: "/certificaciones/ia-generativa-microsoft.jpg",
  },
];
