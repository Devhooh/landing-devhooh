import BenefitsContent from "@/components/ui/BenefitsContent";
import React from 'react';
import { BenefitItem } from "@/data/types";

// Definición de los datos se queda aquí (es estático)
const benefits: BenefitItem[] = [
  {
    icon: "Zap",
    title: "Entrega de proyectos optimizada",
    description:
    "Implementamos procesos ágiles (Scrum/Kanban) y un ciclo de entrega continua (CI/CD) para que tu software web y móvil esté listo a tiempo, sin sacrificar la calidad del código ni la funcionalidad.",
    gradient: "from-colorPrimario5 to-colorPrimario6",
  },
  {
    icon: "Shield",
    title: "Seguridad y estabilidad garantizadas",
    description:
    "Desarrollamos soluciones de software confiables siguiendo los estándares modernos de seguridad (OWASP) y ofrecemos mantenimiento proactivo para proteger tu aplicación y tus datos contra ataques.",
    gradient: "from-colorPrimario5 to-colorPrimario6",
  },
  {
    icon: "Palette",
    title: "Diseño personalizado y profesional",
    description:
    "Cada proyecto se adapta a tu marca y objetivos. Creamos interfaces únicas, atractivas y funcionales, priorizando la Experiencia de Usuario (UX) y el diseño responsivo en todos los dispositivos.",
    gradient: "from-colorPrimario5 to-colorPrimario6",
  },
];

const checklistItems = [
  "Diseño responsive y optimizado para móviles y tablets",
  "Optimización SEO (On-Page) para mejorar tu visibilidad online",
  "Hosting de alto rendimiento y dominio propio configurado",
  "Panel de administración intuitivo (CMS) y fácil de usar",
  "Integración con redes sociales y herramientas de marketing (Analytics)",
  "Certificado SSL gratuito para mayor seguridad de datos",
];


export function BenefitsSection() {
  return (
    <section className="relative bg-gradient-to-b from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 px-4 py-20 md-tablet:px-8 table-lg:px-16">
        {/* 💡 Pasamos los datos estáticos al Client Component */}
        <BenefitsContent 
            benefits={benefits} 
            checklistItems={checklistItems} 
        />
    </section>
  );
}
