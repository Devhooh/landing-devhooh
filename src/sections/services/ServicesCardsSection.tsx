"use client";

import { Lightbulb, Rocket, Repeat } from "lucide-react";

export default function ServicesCardsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="px-6 table-lg:px-8 py-10 bg-gradient-to-r from-white via-blue-50/80 to-white">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 table-lg:grid-cols-[6fr_4fr] gap-6 items-start">
          
          {/* Lado izquierdo - Contenedor de las tarjetas */}
          <div className="flex flex-col gap-10 self-start order-last table-lg:order-first">
            
            {/* Tarjeta pequeña */}
            <div className="bg-gradient-to-b from-blue-400/90 to-indigo-500/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 table-lg:max-w-md w-full">
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-fuchsia-400/80 p-6 rounded-full flex-shrink-0">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-white">Tienes una gran idea</h3>
                  <p className="text-xl leading-snug text-gray-200">
                    Construimos la presencia digital de tu startup, prototipos y MVPs funcionales.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta mediana */}
            <div className="bg-gradient-to-b from-blue-400/90 to-indigo-500/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 table-lg:max-w-xl w-full">
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-fuchsia-400/80 p-6 rounded-full flex-shrink-0">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-white">Buscas crecimiento</h3>
                  <p className="text-xl leading-snug text-gray-200">
                    Desarrollamos soluciones web y móviles robustas para PyMEs, diseñadas para escalar y optimizar procesos.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta grande */}
            <div className="bg-gradient-to-b from-blue-400/90 to-indigo-500/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 table-lg:max-w-2xl w-full">
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-fuchsia-400/80 p-6 rounded-full flex-shrink-0">
                  <Repeat className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-white">Necesitas actualizarte</h3>
                  <p className="text-xl leading-snug text-gray-200">
                    Renovamos tu plataforma, añadimos nuevas funcionalidades y optimizamos su rendimiento para que sea mas veloz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lado derecho - Título y subtítulo */}
          <div className="text-center table-lg:text-right order-first table-lg:order-last">
            <h2 className="text-4xl md-tablet:text-7xl font-extrabold text-black mb-8">
              ¿En qué etapa se encuentra tu proyecto?
            </h2>
            <p className="text-2xl md-tablet:text-3xl font-semibold text-gray-700 mb-8 mx-auto table-lg:mx-0">
              No importa si estás dando los primeros pasos o buscas escalar. En Devhooh,
              adaptamos nuestros servicios para impulsar tu visión.
            </p>
          </div>
        </div>

      </div>

      {/* CTA inferior */}
      <div 
  className="
    text-center py-12 px-8 m-32 shadow-2xl mx-auto select-none
    bg-gradient-to-r from-fuchsia-500 to-purple-600
    rounded-3xl max-w-4xl cursor-pointer
    transform transition-all duration-300
    hover:scale-105 hover:from-fuchsia-600 hover:to-purple-700
    active:scale-95
  "
>
  <h2 className="text-3xl md-tablet:text-4xl font-extrabold text-white leading-tight">
    Tenemos una amplia <span className="text-sky-300">gama de servicios. </span>  
    Escoge el ideal <span className="text-sky-300">para ti</span>
  </h2>
</div>
    </section>
  );
}
