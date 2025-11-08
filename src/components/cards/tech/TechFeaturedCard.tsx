import { IconMapFeatured, TechFeaturedItem } from "@/data/types";
import { TrendingUp } from "lucide-react";
import React from "react";


export const TechFeaturedCard: React.FC<TechFeaturedItem> = ({
  title,
  icon,
  description,
  index = 0,
}) => {
  const IconComponent = IconMapFeatured[icon]

  return (
    <>
      {/* Efectos decorativos */}
      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      {/* Badge numerado */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icono principal */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        
        <div>
          <h3 className="text-xl md-tablet:text-2xl font-bold text-white transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <TrendingUp className="w-4 h-4 text-colorPrimario5 flex-shrink-0" />
            <p className="text-sm text-colorPrimario5 font-semibold">Especialidad destacada</p>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-colorHover5 leading-relaxed mb-6">
        {description}
      </p>

      {/* Badge de tecnología */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
        <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
        <strong className="text-white font-semibold text-sm">
          Tecnología de vanguardia
        </strong>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </>
  )
}
