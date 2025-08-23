"use client";

import { Lightbulb, Rocket, Repeat } from "lucide-react";

export default function ServicesCardsSection() {
  return (
    <section className="w-full py-10 bg-purple-800/70 text-white overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 table-lg:px-8">
        <div className="grid grid-cols-1 table-lg:grid-cols-[6fr_4fr] gap-6 items-start">
          
          {/* Lado izquierdo - Contenedor de las tarjetas */}
          <div className="flex flex-col gap-6 self-start order-last table-lg:order-first">
            
            {/* Tarjeta pequeña */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 table-lg:max-w-md w-full">
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-fuchsia-500/80 p-6 rounded-full flex-shrink-0">
                  <Lightbulb className="h-10 w-10 text-yellow-3" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Tienes una gran idea</h3>
                  <p className="text-xl leading-snug text-gray-300">
                    Construimos la presencia digital de tu startup, prototipos y MVPs funcionales.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta mediana */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 table-lg:max-w-xl w-full">
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-fuchsia-500/80 p-6 rounded-full flex-shrink-0">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Buscas crecimiento</h3>
                  <p className="text-xl leading-snug text-gray-300">
                    Desarrollamos soluciones web y móviles robustas para PyMEs, diseñadas para escalar y optimizar procesos.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta grande */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 table-lg:max-w-2xl w-full">
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-fuchsia-500/80 p-6 rounded-full flex-shrink-0">
                  <Repeat className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Necesitas actualizarte</h3>
                  <p className="text-xl leading-snug text-gray-300">
                    Renovamos tu plataforma, añadimos nuevas funcionalidades y optimizamos su rendimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lado derecho - Título y subtítulo */}
          <div className="text-center table-lg:text-right order-first table-lg:order-last">
            <h2 className="text-5xl md-tablet:text-6xl font-extrabold text-white leading-relaxed mb-8">
              ¿En qué etapa se encuentra tu proyecto?
            </h2>
            <p className="text-2xl sm:text-xl text-gray-200 mb-8 mx-auto table-lg:mx-0">
              No importa si estás dando los primeros pasos o buscas escalar. En Devhooh,
              adaptamos nuestros servicios para impulsar tu visión.
            </p>
          </div>
        </div>

        <div 
          className="
            text-center p-6 mt-12 rounded-3xl shadow-2xl mx-auto select-none
            bg-gradient-to-r from-purple-600 to-indigo-800 
            transform transition-all duration-300
            hover:scale-105 hover:from-purple-700 hover:to-indigo-900
            active:scale-95 active:rounded-xl active:from-purple-700 active:to-indigo-900
            max-w-3xl cursor-pointer
          "
        >
          <h2 className="text-4xl md-tablet:text-5xl md:text-5xl font-extrabold text-white leading-tight animate-pulse">
            Tenemos una amplia <span className="text-yellow-400">gama de servicios.</span> Escoge el ideal <span className="text-yellow-400">para Ti</span>
          </h2>
        </div>

      </div>
    </section>
  );
}


