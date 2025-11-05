import { Rocket, Sparkles } from "lucide-react";

export default function MediumCard(){
  return (
    <>
      {/* Efectos decorativos */}
      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white opacity-70"></div> 

      {/* Badge numerado */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
        {String(2).padStart(2, '0')}
      </div>

      <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
        <div className="bg-colorHover2 p-6 rounded-full flex-shrink-0">
          <Rocket className="h-10 w-10 text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-1 text-white">Buscas crecimiento</h2>
          <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
            Desarrollamos soluciones web y móviles robustas para PyMEs, diseñadas para escalar y optimizar procesos.
          </p>

          {/* Badge de especialización */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mt-5 rounded-full bg-white/20 border border-white/30">
            <Sparkles className="w-3 h-3 text-white" />
            <span className="text-white font-semibold text-xs">
              Servicio garantizado
            </span>
          </div>
        </div>
      </div>
    </>
  )
}