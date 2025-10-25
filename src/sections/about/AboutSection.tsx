import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import { Sparkles, Award } from "lucide-react";

export default function AboutSection() {

  return (
    <div className="relative bg-colorFondo pt-20 w-full overflow-hidden">
      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        {/* Card central mejorada */}
        <div className="flex justify-center px-4">
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.4, delay: 0.2}}
            className="relative bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 text-white rounded-3xl p-8 md-tablet:p-12 shadow-[0_0_50px_rgba(103,61,230,0.3)] border border-colorPrimario5/20 backdrop-blur-md max-w-5xl text-center"
          >
            {/* Efectos decorativos en la card */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40"></div>
            
            {/* Sparkles flotantes */}
            <FloatingWrapper
              className="absolute top-10 left-2 md-tablet:left-10 text-colorPrimario5"
            >
              <Sparkles className="w-6 h-6" />
            </FloatingWrapper>
            
            <FloatingWrapper
              className="absolute bottom-12 right-2 md-tablet:right-12 text-colorSecundario1"
            >
              <Sparkles className="w-5 h-5" />
            </FloatingWrapper>

            {/* Título con animación letra por letra */}
            <h2 className="text-2xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-8 leading-tight">
              Cuando la confianza es alta, 
              <br />
              la comunicación es efectiva
            </h2>

            <p className="text-lg table-lg:text-xl font-light leading-relaxed max-w-4xl mx-auto text-colorHover5">
              En solo 5 años, Devhooh ha ayudado a startups y empresas a transformar sus ideas en soluciones digitales exitosas. 
              Con un equipo apasionado por la innovación, combinamos diseño, desarrollo y tecnologías de vanguardia para que tu proyecto destaque desde el primer día.
            </p>

            {/* Badge de años de experiencia */}
            <div
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full 
              bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm"
            >
              <Award className="w-5 h-5 text-colorPrimario5" />
              <p className="text-colorHover5 font-semibold">5+ años de experiencia</p>
            </div>
          </InViewAnimationWrapper>
        </div>

      </div>
    </div>
  );
}