import { IconMapProcessPort, ProcessPortItem } from "@/data/types";

export default function ProcessPortfolioCard({
  icon, 
  title, 
  description, 
  index = 0, 
  isLast
}: ProcessPortItem) {
  const IconComponent = IconMapProcessPort[icon]

  return (
    <>
      {/* Número del timeline mejorado */}
      <div className="relative z-10 flex-shrink-0">
        <div 
          className="
            w-12 h-12 md-tablet:w-16 md-tablet:h-16 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
            flex items-center justify-center shadow-lg group hover:shadow-xl
            hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
        >
          <span className="text-white font-bold text-xl animate-pulse">{index + 1}</span>
        </div>
      </div>

      {/* Card del paso mejorada */}
      <div className="flex-grow group">
        <div 
          className="
            relative p-4 rounded-3xl bg-white backdrop-blur-sm border-2 border-white/20 hover:border-colorPrimario5/30 
            shadow-[0_0_20px_rgba(103,61,230,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
            hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-300"
        >
          {/* Efectos decorativos */}
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
          
          {/* Header del step */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 flex items-center justify-center border border-colorPrimario5/30">
              <IconComponent className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
                {title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-sm text-colorPrimario5 font-semibold">Paso {index + 1}</div>
                <div className="w-1 h-1 rounded-full bg-colorPrimario5/50"></div>
              </div>
            </div>
          </div>
          
          {/* Descripción */}
          <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-6">
            {description}
          </p>

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
      </div>
    </>
  )
}