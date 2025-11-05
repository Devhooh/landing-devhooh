import { PlanItem } from "@/data/types";

export const planesData: PlanItem[] = [
    {
      title: "Plan Starter",
      subtitle: "Ideal para Emprendedores y pequeñas empresas que buscan su primera Aplicación Web o MVP.",
      icon: "CheckCircle",
      gradient: "from-white to-white",
      iconGradient: "from-colorPrimario5 to-colorPrimario6",
      borderColor: "border-colorPrimario5/20",
      popular: false,
      beneficio: [
        "Landing page o web básica profesional y rápida",
        "App prototipo o MVP",
        "Diseño personalizado con identidad de marca",
        "Optimización para velocidad y SEO inicial",
        "Soporte de implementación y guía básica"
      ]
    },
    {
      title: "Plan Enterprise",
      subtitle: "Para Corporaciones que requieren Desarrollo Avanzado, Integración de IA y Soporte Dedicado.",
      icon: "Star",
      gradient: "from-colorDarkFondo2 to-colorDarkFondo4",
      iconGradient: "from-colorSecundario1 to-colorSecundario3",
      borderColor: "border-colorSecundario1",
      popular: true,
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración de Inteligencia IA o Machine Learning",
        "Seguridad e infraestructura profesional con monitoreo",
        "Escalabilidad y actualizaciones constantes",
        "Soporte dedicado y consultoría técnica"
      ]
    },
    {
      title: "Plan Business",
      subtitle: "Para Negocios en Crecimiento que necesitan Soluciones Robustas (API, CMS) y Escalabilidad.",
      icon: "Shield",
      gradient: "from-white to-white",
      iconGradient: "from-colorSecundario3 to-colorSecundario4",
      borderColor: "border-colorSecundario3/20",
      popular: false,
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración con APIs o sistemas internos",
        "Panel administrativo para gestionar tu contenido",
        "Rendimiento optimizado para usuarios y buscadores",
        "Mantenimiento inicial y mejoras según tu feedback"
      ]
    },
  ];