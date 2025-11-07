import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";
import React from "react";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

interface ProcessProps{
  index: number;
  title: string;
  description: string;
  points?: string[];
  isLast?: boolean;
}

export const ServicesProcessCard: React.FC<ProcessProps> = ({
  index,
  title,
  description,
  points,
  isLast
}) => {
  return (
    <div className="flex-grow group">
      <div className="
        relative p-6 md-tablet:p-8 rounded-3xl bg-white backdrop-blur-sm border-2 border-white/20
        hover:border-colorPrimario5/30 shadow-[0_0_20px_rgba(103,61,230,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)] 
        hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-300"
      >
        
        {/* Efectos decorativos */}
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        {/* Header del step */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 flex items-center justify-center border border-colorPrimario5/30">
            <Clock className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
          </div>
          <div>
            <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
              {title}
            </h3>
            <div className="flex items-center gap-4 mt-1">
              <div className="text-sm text-colorPrimario5 font-semibold">Paso {index + 1}</div>
              <div className="w-1 h-1 rounded-full bg-colorPrimario5/50"></div>
              <div className="text-xs text-colorPrimario1/60">Fase esencial</div>
            </div>
          </div>
        </div>
        
        {/* Descripción */}
        <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* Lista de puntos mejorada */}
        {points && (
          <div className="space-y-3">
            <h4 className="text-colorPrimario2 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-colorPrimario5 flex-shrink-0" />
              Incluye:
            </h4>
            <StaggerListContainer className="space-y-2">
              {points.map((item, i) => (
                <StaggerListItemClient
                  key={i}
                  direction="y"
                  offset={-20}
                  className="flex items-start gap-3 p-3 rounded-xl bg-colorHover4/50 border border-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white flex-shrink-0" />
                  </div>
                  <span className="text-colorPrimario1/80 text-sm leading-relaxed">{item}</span>
                </StaggerListItemClient>
              ))}
            </StaggerListContainer>
          </div>
        )}

        {/* Badge de estado */}
        <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorPrimario5/10 border border-colorPrimario5/20">
          <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
          <span className="text-colorPrimario5 font-semibold text-sm">
            {isLast ? "Entrega final" : "En progreso"}
          </span>
        </div>

        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Conector al siguiente paso */}
      {!isLast && (
        <SimpleInViewWrapper
          direction="x"
          offset={-20}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2 mt-4 ml-4 text-colorPrimario1/60"
        >
          <ArrowRight className="w-4 h-4 flex-shrink-0"/>
          <span className="text-sm font-medium">Siguiente paso</span>
        </SimpleInViewWrapper>
      )}
    </div>
  )
}
