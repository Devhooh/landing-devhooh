import { CheckCircle, Sparkles } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  index: number;
}

export default function TechServiceCard({
  title,
  description,
  index,
}: ServiceProps){
  return (
    <>
      {/* Efectos decorativos */}
      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      {/* Badge numerado */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex flex-col md-tablet:flex-row md-tablet:items-start gap-4">
        
        {/* Icono */}
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl 
          bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 
          flex items-center justify-center shadow-lg 
          group-hover:shadow-xl transition-all duration-300
          mx-auto md-tablet:mx-0"
        >
          <CheckCircle className="w-6 h-6 text-white" />
        </div>

        {/* Contenido */}
        <div className="flex-grow">
          <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300 mb-3">
            {title}
          </h3>
          <p className="text-colorPrimario1/80 leading-relaxed mb-4">
            {description}
          </p>

          {/* Badge de especialización */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30">
            <Sparkles className="w-3 h-3 text-colorPrimario5 flex-shrink-0" />
            <strong className="text-colorPrimario5 font-semibold text-xs">
              Servicio especializado
            </strong>
          </div>
        </div>
      </div>
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </>
  )
}
