import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";

export default function CTAServices() {

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        
        {/* Contenido principal */}
        <div className="space-y-8">
          
          {/* Título principal animado */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <h2
              className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 leading-tight text-white"
            >
              Cuando estés listo:
              <br/>
              Hablemos sobre tu <strong className="text-colorPrimario5"> proyecto </strong>
            </h2>
          </InViewAnimationWrapper>

          {/* Elementos visuales decorativos */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            className="flex justify-center items-center gap-8 my-12"
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {/* Sparkles flotantes */}
            <FloatingWrapper>
              <Sparkles className="w-8 h-8 text-colorPrimario5" />
            </FloatingWrapper>
            
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-colorHover5 to-transparent"></div>
            
            <FloatingWrapper>
              <Users className="w-10 h-10 text-colorSecundario1" />
            </FloatingWrapper>
            
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-colorHover5 to-transparent"></div>
            
            <FloatingWrapper>
              <Sparkles className="w-6 h-6 text-colorPrimario7" />
            </FloatingWrapper>
          </InViewAnimationWrapper>

          {/* Botón principal mejorado */}
          <InViewAnimationWrapper
            direction="y"
            offset={20}
            className="flex justify-center mb-10"
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link href="/contact">
              <button
                className="
                  group relative overflow-hidden px-10 py-5 text-xl font-bold rounded-2xl 
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_30px_rgba(103,61,230,0.5)] hover:shadow-[0_0_40px_rgba(103,61,230,0.7)]
                  hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  Ponte en contacto
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </InViewAnimationWrapper>

          {/* Estadísticas de confianza */}
          <StaggerListContainer className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              {data: "50+", text: "Proyectos exitosos"},
              {data: "98%", text: "Clientes satisfechos"},
              {data: "24h", text: "Tiempo de respuesta"},
            ].map((value, index)=> (
              <StaggerListItemClient
                key={index} 
                direction="y"
                offset={30}
                className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-2xl font-bold text-colorPrimario5">{value.data}</div>
                <p className="text-sm text-colorHover5">{value.text}</p>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          {/* Mensaje final mejorado */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md-tablet:text-xl text-colorHover5 font-semibold leading-relaxed mb-6">
              Desde startups hasta grandes empresas, 
              <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text font-bold">
                {" "}tú puedes ser el siguiente
              </span>
            </p>
            
            {/* Call to action secundario */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/portfolio" 
                className="text-colorHover5 hover:text-colorPrimario7 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
                Ver nuestro portafolio
              </Link>
              <span className="text-colorHover5/50">•</span>

              <Link 
                href="/about" 
                className="text-colorHover5 hover:text-colorPrimario7 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
                Conoce nuestro equipo
              </Link>
              <span className="text-colorHover5/50">•</span>
              
              <Link 
                href="/services" 
                className="text-colorHover5 hover:text-colorPrimario7 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
                Nuestros servicios
              </Link>
            </div>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
}