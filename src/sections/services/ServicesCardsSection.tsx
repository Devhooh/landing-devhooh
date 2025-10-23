import { Lightbulb, Rocket, Repeat, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";

export default function ServicesCardsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="px-6 table-lg:px-8 py-10 bg-colorFondo">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 table-lg:grid-cols-[6fr_4fr] gap-6 items-start">
          
          {/* Lado izquierdo - Contenedor de las tarjetas */}
          <div className="flex flex-col gap-10 self-start order-last table-lg:order-first">
            
            {/* Tarjeta pequeña */}
            <InViewAnimationWrapper
              direction="x"
              offset={-20}
              delay={0.2}
              transition={{duration: 0.5}}
              className="
                bg-colorSecundario4
                ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-md w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >
              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white opacity-70"></div> 

              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(1).padStart(2, '0')}
              </div>

              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-colorHover2 p-6 rounded-full flex-shrink-0">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-white">Tienes una gran idea</h2>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Construimos la presencia digital de tu startup, prototipos y MVPs funcionales.
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
            </InViewAnimationWrapper>

            {/* Tarjeta mediana */}
            <InViewAnimationWrapper
              direction="x"
              offset={-20}
              delay={0.2}
              transition={{duration: 0.5}}
              className="
                bg-colorSecundario4
                ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >

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
            </InViewAnimationWrapper>

            {/* Tarjeta grande */}
            <InViewAnimationWrapper
              direction="x"
              offset={-20}
              delay={0.2}
              transition={{duration: 0.5}}
              className="
                bg-colorSecundario4
                ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-2xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white opacity-70"></div>  

              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(3).padStart(2, '0')}
              </div>

              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-colorHover2 p-6 rounded-full flex-shrink-0">
                  <Repeat className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-white">Necesitas actualizarte</h2>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Renovamos tu plataforma, añadimos nuevas funcionalidades y optimizamos su rendimiento para que sea más veloz.
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
            </InViewAnimationWrapper>
          </div>
          
          {/* Lado derecho - Título y subtítulo */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            delay={0.3}
            transition={{duration: 0.5}}
            className="text-center table-lg:text-right order-first table-lg:order-last"
          >
            <h2 className="text-4xl md-tablet:text-7xl font-extrabold text-colorPrimario2 mb-8">
              ¿En qué etapa se encuentra 
              <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> tu proyecto?</span>
            </h2>
            <p className="text-lg md-tablet:text-2xl font-semibold text-gray-700 mb-8 mx-auto table-lg:mx-0">
              Desde la conceptualización (MVP y Startups) hasta el crecimiento (PyMEs) y la modernización de plataformas (Legacy), adaptamos nuestra experiencia para 
              <span className="text-colorSecundario4"> impulsar tu visión. </span>
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Call to action final */}
        <InViewAnimationWrapper
          className="relative z-10 text-center mt-20"
          direction="y"
          offset={20}
          delay={0.3}
          transition={{ duration: 0.3,}}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl
            bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm">
            <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-base md-tablet:text-2xl">
              Trabajemos en tu próximo proyecto ahora!
            </span>
            <Zap className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </Link>
        </InViewAnimationWrapper>
      </div>

      {/* CTA para los servicios */}
      <div
        className="
          relative overflow-hidden block
          text-center py-12 px-8 my-20 shadow-2xl mx-auto select-none 
          bg-colorHover2
          w-full cursor-pointer
          transition-all duration-300 ease-in-out transform 
          md-tablet:hover:scale-[1.05] 
          md-tablet:hover:skew-x-[-5deg]
        "
      >
        {/* Glow animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-sky-400 opacity-30 blur-2xl animate-pulse" />
        
        <h3 className="relative text-3xl md-tablet:text-4xl font-extrabold text-white leading-tight italic table-lg:not-italic">
          Tenemos una amplia <span className="text-colorDarkFondo2">gama de servicios. </span>  
          Escoge el ideal <span className="text-colorDarkFondo2">para ti</span>
        </h3>
      </div>
    </section>
  );
}
