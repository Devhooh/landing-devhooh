"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import React from 'react';
import StaggerListContainer from "@/components/ui/StaggerListContainer"; 
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";
import { IconMap, BenefitsContentProps } from "@/data/types";

export default function BenefitsContent({ benefits, checklistItems }: BenefitsContentProps) {
  return (
    <div className="max-w-[1400px] mx-auto">
      
      {/* TÍTULO Y SUBTÍTULO */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold leading-tight mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Beneficios de nuestro desarrollo de software
        </motion.h2>
        
        <motion.p
          className="text-lg md-tablet:text-xl text-colorHover5 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Nuestra metodología se centra en la calidad, el rendimiento y la seguridad. Ofrecemos soluciones digitales robustas y escalables, respaldadas por un equipo experto.
        </motion.p>
      </div>

      {/* CARDS HORIZONTALES */}
      <StaggerListContainer className="grid grid-cols-1 table-lg:grid-cols-3 gap-6 mb-20">
        {benefits.map((benefit, index) => {
          const IconComponent = IconMap[benefit.icon];

          return (
            <ProjectStaggerWrapper
              key={index}
              index={index}
              isListItem={true}
              className={`
                  relative p-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-[0_0_30px_rgba(103,61,230,0.25)] 
                  hover:shadow-[0_0_40px_rgba(103,61,230,0.4)] transition-all duration-300`}
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
            </ProjectStaggerWrapper>
          )
        })}
      </StaggerListContainer>

      {/* SECCIÓN INFERIOR: LISTA E IMAGEN */}
      <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
        
        {/* BLOQUE DE LISTA */}
        <div className="space-y-6 text-center table-lg:text-left">
          <h3 className="text-3xl md-tablet:text-4xl font-bold text-white mb-8">
            Lo que incluye tu proyecto
          </h3>
          
          <StaggerListContainer className="space-y-4 inline-block table-lg:block text-left">
            {checklistItems.map((item, index) => (
              <ProjectStaggerWrapper
                key={index}
                index={index}
                isListItem={true}
                className="flex items-center gap-4 text-colorHover5 text-lg"
              >
                <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario6">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>{item}</span>
              </ProjectStaggerWrapper>
            ))}
          </StaggerListContainer>
        </div>

        {/* BLOQUE DE IMAGEN */}
        <motion.div
          className="relative flex justify-center table-lg:justify-end mx-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative p-6 table-lg:p-4 lg-table:p-8 rounded-3xl bg-gradient-to-br from-colorSecundario1/20 to-colorSecundario3/20 backdrop-blur-sm border border-white/10 w-fit">
              {/* Contenedor de imagen con tamaño fijo */}
            <div className="w-90 h-90 md-tablet:w-[450px] md-tablet:h-[450x] table-lg:w-96 table-lg:h-96 rounded-2xl bg-gradient-to-br from-colorPrimario5 to-colorSecundario3 flex items-center justify-center overflow-hidden">
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
        </motion.div>
      </div>

    </div>
  );
}