import React from 'react';
import Image from "next/image";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { CircleCheck } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import ButtonCta from "@/components/ui/ButtonCta";
import TextRevealClient from '@/components/ui/TextRevealClient';

export default function HeroSectionHome() {
  const listItems = [
    <>Aplicaciones <strong>web rápidas y escalables</strong> (Next.js)</>,
    <><strong>Apps móviles modernas y fluidas</strong> (iOS y Android)</>,
    <><strong>Integración de Inteligencia Artificial</strong> en tus procesos empresariales</>,
    <>Desarrollo de <strong>Sistemas empresariales personalizados</strong> (CRM, ERP)</>,
  ];

  return (
    <section className="relative w-full bg-colorFondo overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6 mb-10">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">
          <TextRevealClient
            direction="x"
            offset={-30}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            className="order-1 text-center table-lg:text-left text-4xl md-tablet:text-5xl font-extrabold text-colorPrimario2 leading-tight tracking-tight"
          >
            <h1>
              Desarrollo de 
              <strong className="text-colorPrimario5"> software inteligente </strong> 
              a tu medida
            </h1>
          </TextRevealClient>
    
          {/* Contenedor para la image: */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            transition={{duration: 0.3, delay: 0.2}}
            className="order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center"
          >
            <div className="relative w-[460px] h-[460px] md-tablet:w-[600px] md-tablet:h-[600px] rounded-2xl">
              <Image
                src="/assets/images/hero-home.png"
                alt="Equipo de desarrollo creando software a medida con inteligencia artificial"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 462px"
                className="object-contain"
                priority
              />
            </div>
          </InViewAnimationWrapper>
    
          <TextRevealClient
            direction="x"
            offset={-30}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="order-3 text-lg md-tablet:text-xl text-center table-lg:text-left text-colorPrimario1 leading-relaxed max-w-xl mx-auto table-lg:mx-0"
          >
            <h2>
              Desarrollo de páginas web modernas, aplicaciones móviles y sistemas empresariales con inteligencia artificial para que tu negocio sea más innovador, eficiente y competitivo en el mercado digital.
            </h2>
          </TextRevealClient>
    
          <StaggerListContainer
            className="order-4 space-y-2 text-base md-tablet:text-lg text-gray-800 text-left table-lg:text-left max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0"
          >
            {listItems.map((item, idx) => (
              <StaggerListItemClient
                key={idx}
                index={idx}
                delayBase={0.2}
                className="flex items-center gap-3"
                direction="x"
                offset={-20}
              >
                <CircleCheck className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>
    
          {/* Botones: */}
          <div
            className="order-5 flex justify-center items-center flex-col md-tablet:flex-row table-lg:justify-start pt-4 gap-4"
          >
            <InViewAnimationWrapper
              direction="y" 
              offset={20}
              transition={{duration: 0.2, delay: 0.2}}
              >
                <ButtonCta 
                  href="/services"
                  className="px-4 py-4 text-lg md-tablet:text-lg font-semibold border border-colorPrimarioLogo1
                  bg-colorSecundario3 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                  hover:scale-[1.05] active:scale-[0.98] transform"
                >
                  Ver nuestros servicios
                </ButtonCta>
            </InViewAnimationWrapper>
    
            <InViewAnimationWrapper
              direction="y" 
              offset={20} 
              transition={{duration: 0.2, delay: 0.3}}
            >
              <ButtonCta
                href="/portfolio"
                className="px-4 py-4 text-lg md-tablet:text-lg font-semibold border border-colorPrimarioLogo1
                  bg-white hover:bg-colorSecundario3 text-black rounded-2xl shadow-lg hover:shadow-xl hover:text-white transition-all duration-300
                  hover:scale-[1.05] active:scale-[0.98] transform"
              >
                Ver nuestro portafolio
              </ButtonCta>
            </InViewAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
