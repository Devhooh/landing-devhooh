import { IconMapTech } from "@/data/types";
import { TechItem } from "@/data/types";

export default function TechSectionCard({
  icon, 
  title, 
  description
}: TechItem) {
  const IconComponent = IconMapTech[icon];
  return (
    <>
    {/* Icono flotante */}
      <div
        className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-colorSecundario1 to-colorSecundario2 
          flex items-center justify-center mb-4 shadow-lg"
      >
        <div>
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        
        {/* Efecto de brillo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <h3 className="text-xl font-bold text-colorPrimario2 mb-3">
        {title}
      </h3>
      
      <p className="text-colorPrimario1/70 text-base leading-relaxed">
        {description}
      </p>

      {/* Indicador decorativo */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-colorPrimario5/30 group-hover:bg-colorPrimario5 transition-colors duration-300"></div>
    </>
  )
}