"use client";

import React from "react";
import { Lightbulb, Rocket, Repeat } from "lucide-react";

export default function ServicesCardsSection() {
  return (
    <section className="w-full py-20 bg-indigo-950/90 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Título y subtítulo (lado derecho en escritorio, arriba en móvil) */}
          <div className="lg:pl-12 lg:text-right flex flex-col items-end">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              ¿En qué etapa se encuentra tu proyecto?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
              No importa si estás dando los primeros pasos o buscas escalar. En
              Devhooh, adaptamos nuestros servicios para impulsar tu visión.
            </p>
          </div>

          {/* Tarjetas (lado izquierdo en escritorio, abajo en móvil) */}
          <div className="flex flex-col gap-4">
            {/* Card pequeña */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 w-60">
              <div className="flex items-start">
                <div className="bg-blue-500/80 p-3 rounded-full mr-4 flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Tienes una gran idea
                  </h3>
                  <p className="text-sm text-gray-300">
                    Ayudamos a startups y emprendedores a construir su primera
                    presencia digital. Creamos prototipos y MVPs funcionales
                    para que puedas lanzar tu proyecto al mercado.
                  </p>
                </div>
              </div>
            </div>

            {/* Card mediana */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 w-80">
              <div className="flex items-start">
                <div className="bg-blue-500/80 p-3 rounded-full mr-4 flex-shrink-0">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Listo para despegar
                  </h3>
                  <p className="text-sm text-gray-300">
                    Te apoyamos en el desarrollo y lanzamiento para llevar tu
                    producto al siguiente nivel y alcanzar más usuarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Card grande */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 w-[26rem]">
              <div className="flex items-start">
                <div className="bg-blue-500/80 p-3 rounded-full mr-4 flex-shrink-0">
                  <Repeat className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Escalar y optimizar
                  </h3>
                  <p className="text-sm text-gray-300">
                    Optimizamos procesos y mejoramos el rendimiento de tu
                    plataforma para que puedas crecer de forma sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
