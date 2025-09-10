export interface ReviewData {
  id: number;
  logoUrl: string;
  projectTitle: string;
  reviewBody: string;
  reviewerName: string;
  position: string;
  reviewerProfileUrl: string;
  rating: number;
  quality: number;
  schedule: number;
  cost: number;
  willingnessToRecommend: number;
}

export const reviewData: ReviewData[] = [
  {
    id: 1,
    logoUrl: "/assets/images/noBgBlack.png",
    projectTitle: "Desarrollo de App Móvil para Gestión de Pedidos",
    reviewBody:
      "El equipo de Devhoo superó nuestras expectativas. La comunicación fue fluida y entregaron un producto final robusto y fácil de usar. Estamos muy satisfechos con el resultado.",
    reviewerName: "Laura Gómez",
    position: "Gerente de Operaciones en FoodExpress",
    reviewerProfileUrl: "/assets/images/usuario.png",
    rating: 4.8,
    quality: 5,
    schedule: 4.5,
    cost: 4.5,
    willingnessToRecommend: 5,
  },
  {
    id: 2,
    logoUrl: "/assets/images/noBgBlack.png",
    projectTitle: "Optimización de E-commerce y Estrategia SEO",
    reviewBody:
      "Su enfoque estratégico y técnico nos ayudó a duplicar nuestras ventas en línea en solo seis meses. Son verdaderos expertos en su campo.",
    reviewerName: "Carlos Ramirez",
    position: "Director de Marketing en ShopMax",
    reviewerProfileUrl: "/assets/images/usuario.png",
    rating: 4.9,
    quality: 5,
    schedule: 5,
    cost: 4.5,
    willingnessToRecommend: 5,
  },
  {
    id: 3,
    logoUrl: "/assets/images/noBgBlack.png",
    projectTitle: "Implementación de Sistema de Gestión Interna",
    reviewBody:
      "La transición fue increíblemente suave. El nuevo sistema ha mejorado drásticamente nuestra eficiencia interna. La capacitación que ofrecieron fue excelente.",
    reviewerName: "Carlos Ramirez",
    position: "Coordinadora de Proyectos en InnoTech",
    reviewerProfileUrl: "/assets/images/usuario.png",
    rating: 4.7,
    quality: 4.5,
    schedule: 5,
    cost: 4.5,
    willingnessToRecommend: 5,
  },
  {
    id: 4,
    logoUrl: "/assets/images/noBgBlack.png",
    projectTitle: "Rediseño de Sitio Web Corporativo",
    reviewBody:
      "El rediseño del sitio web fue un éxito. Nos encanta el nuevo look moderno y profesional. El equipo fue muy receptivo a nuestros comentarios durante todo el proceso.",
    reviewerName: "Alma Marcela",
    position: "CEO en CorpVision",
    reviewerProfileUrl: "/assets/images/usuario.png",
    rating: 4.6,
    quality: 4.5,
    schedule: 4.5,
    cost: 4.5,
    willingnessToRecommend: 4.5,
  },
  {
    id: 5,
    logoUrl: "/assets/images/noBgBlack.png",
    projectTitle: "Implementación de Sistema de Gestión Interna",
    reviewBody:
      "La transición fue increíblemente suave. El nuevo sistema ha mejorado drásticamente nuestra eficiencia interna. La capacitación que ofrecieron fue excelente.",
    reviewerName: "Larry Cañonga",
    position: "Coordinadora de Proyectos en InnoTech",
    reviewerProfileUrl: "/assets/images/usuario.png",
    rating: 4.7,
    quality: 4.5,
    schedule: 5,
    cost: 4.5,
    willingnessToRecommend: 5,
  },
  {
    id: 6,
    logoUrl: "/assets/images/noBgBlack.png",
    projectTitle: "Rediseño de Sitio Web Corporativo",
    reviewBody:
      "El rediseño del sitio web fue un éxito. Nos encanta el nuevo look moderno y profesional. El equipo fue muy receptivo a nuestros comentarios durante todo el proceso.",
    reviewerName: "Juan Pérez",
    position: "CEO en CorpVision",
    reviewerProfileUrl: "/assets/images/usuario.png",
    rating: 4.6,
    quality: 4.5,
    schedule: 4.5,
    cost: 4.5,
    willingnessToRecommend: 4.5,
  },
];
