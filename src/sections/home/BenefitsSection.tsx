import { BenefitItem } from "@/data/types";
import { Check } from "lucide-react";
import Image from "next/image";
import React from 'react';

import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import StaggerListContainer from "@/components/ui/StaggerListContainer"; 
import { IconMap } from "@/data/types";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

// Definición de los datos se queda aquí (es estático)
const benefits: BenefitItem[] = [
  {
    icon: "Zap",
    title: "Entrega de proyectos optimizada",
    description:
    "Implementamos procesos ágiles (Scrum/Kanban) y un ciclo de entrega continua (CI/CD) para que tu software web y móvil esté listo a tiempo, sin sacrificar la calidad del código ni la funcionalidad.",
  },
  {
    icon: "Shield",
    title: "Seguridad y estabilidad garantizadas",
    description:
    "Desarrollamos soluciones de software confiables siguiendo los estándares modernos de seguridad (OWASP) y ofrecemos mantenimiento proactivo para proteger tu aplicación y tus datos contra ataques.",
  },
  {
    icon: "Palette",
    title: "Diseño personalizado y profesional",
    description:
    "Cada proyecto se adapta a tu marca y objetivos. Creamos interfaces únicas, atractivas y funcionales, priorizando la Experiencia de Usuario (UX) y el diseño responsivo en todos los dispositivos.",
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
      <div className="max-w-[1400px] mx-auto">
        
        {/* TÍTULO Y SUBTÍTULO */}
        <div className="text-center mb-16">
          <TextRevealClient
            direction="y" 
            offset={30}
            transition={{duration: 0.3, delay: 0.3, ease: 'easeOut'}} 
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold leading-tight mb-6 text-white">
              Beneficios de nuestro desarrollo de software
            </h2>
          </TextRevealClient>
          
          <TextRevealClient
            direction="y" 
            offset={20}
            transition={{duration: 0.3, delay: 0.4, ease: 'easeOut'}}
          >
            <p className="text-lg md-tablet:text-xl text-colorHover5 max-w-2xl mx-auto">
              Nuestra metodología se centra en la calidad, el rendimiento y la seguridad. Ofrecemos soluciones digitales robustas y escalables, respaldadas por un equipo experto.
            </p>
          </TextRevealClient>
        </div>
  
        {/* CARDS HORIZONTALES */}
        <StaggerListContainer
          staggerChildren={0.2}
          delayChildren={0.3}
          className="grid grid-cols-1 table-lg:grid-cols-3 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = IconMap[benefit.icon];
  
            return (
              <StaggerListItemClient
                key={index}
                direction="y"
                offset={40}
                transition={{duration: 0.2, ease: 'easeOut'}}
                className="
                    relative p-6 rounded-2xl bg-gradient-to-br from-colorPrimario5 to-colorPrimario6 shadow-[0_0_30px_rgba(103,61,230,0.25)] 
                    hover:shadow-[0_0_40px_rgba(103,61,230,0.4)] transition-all duration-300"
              >
                <div className="flex flex-col items-start text-left">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md-tablet:text-2xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-colorHover5 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerListItemClient>
            )
          })}
        </StaggerListContainer>
  
        {/* SECCIÓN INFERIOR: LISTA E IMAGEN */}
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center table-lg:text-left">
            <TextRevealClient
              direction="y" 
              offset={30}
              transition={{duration: 0.3, delay: 0.3, ease: 'easeOut'}}
            >
              <h3 className="text-3xl md-tablet:text-4xl font-bold text-white mb-8">
                Lo que incluye tu proyecto
              </h3>
            </TextRevealClient>
            
            <StaggerListContainer
              className="space-y-4 inline-block table-lg:block text-left"
            >
              {checklistItems.map((item, index) => (
                <StaggerListItemClient
                  key={index}
                  direction="y"
                  offset={-30}
                  transition={{duration: 0.3}}
                  className="flex items-center gap-4 text-colorHover5 text-lg"
                >
                  <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario6">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </StaggerListItemClient>
              ))}
            </StaggerListContainer>
          </div>
  
          {/* BLOQUE DE IMAGEN */}
          <div className="relative flex justify-center table-lg:justify-end mx-5">
            <SimpleInViewWrapper
              direction="x"
              offset={20}
              className="w-fit"
            >
              <div className="relative p-6 table-lg:p-4 lg-table:p-8 rounded-3xl bg-gradient-to-br from-colorSecundario1/20 to-colorSecundario3/20 backdrop-blur-sm border border-white/10 w-fit">
                <div className="w-90 h-90 md-tablet:w-[450px] md-tablet:h-[450px] table-lg:w-96 table-lg:h-96 rounded-2xl bg-gradient-to-br from-colorPrimario5 to-colorSecundario3 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/images/beneficiosweb.png"
                    width={643}
                    height={696}    
                    alt="Checklist de beneficios y servicios incluidos en el desarrollo de software web y móvil"
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 90vw, 384px"
                    loading="lazy"
                  />
                </div>
                
                {/* Efectos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-colorPrimario6 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-colorSecundario2 animate-pulse delay-1000"></div>
              </div>
            </SimpleInViewWrapper>
            
          </div>
        </div>
  
      </div>
    </section>
  );
}
