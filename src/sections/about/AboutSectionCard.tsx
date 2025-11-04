import Image from "next/image";
import { Eye, Target, Users, Globe} from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function AboutSectionCard() {
  return(
    <div className="relative bg-colorFondo py-20 w-full overflow-hidden">
      {/* Contenedor de las */}
        <div className="relative px-4 md-tablet:px-8 py-20 bg-gradient-to-b from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 rounded-3xl mx-4 border border-colorPrimario5/20">
          
          <div className="space-y-20 relative z-10">
            
            {/* Card Visión mejorada */}
            <InViewAnimationWrapper
              direction="x"
              offset={-20}
              transition={{duration:0.2, delay: 0.3}}
              className="w-full table-lg:w-4/5 table-lg:self-start mr-auto bg-gradient-to-br from-colorHover5 to-colorHover6 
              rounded-3xl shadow-[0_0_30px_rgba(103,61,230,0.15)] hover:shadow-[0_0_40px_rgba(103,61,230,0.25)] 
              transition-all duration-300 overflow-hidden flex flex-col table-lg:flex-row border border-white/20 
              backdrop-blur-sm group"
            >
              {/* Imagen mejorada */}
              <div className="rounded-full relative p-8 table-lg:w-2/5 flex flex-col items-center justify-center bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10">
                <div
                  className="relative"
                >
                  <Image
                    width={800}
                    height={821}
                    src="/assets/images/vision.png"
                    alt="Visión de la empresa"
                    className="w-64 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 60vw, 300px"
                  />
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>

                {/* Círculo decorativo */}
                <div className="animate-pulse absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 opacity-20"
                ></div>
              </div>

              {/* Contenido de texto mejorado */}
              <div className="table-lg:w-3/5 p-8 md-tablet:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md-tablet:text-4xl font-bold text-colorPrimario2">
                    Visión
                  </h2>
                </div>
                
                <p className="text-base md-tablet:text-lg text-colorPrimario1/80 mb-6 leading-relaxed">
                  Ser reconocidos como líderes en innovación tecnológica, entregando proyectos que superen expectativas y generen impacto real.
                </p>
                <p className="text-base text-colorPrimario1/70 leading-relaxed">
                  En los próximos 3 a 5 años, consolidarnos como una de las empresas tecnológicas más importantes del país, 
                  con presencia internacional y capacidad de competir a nivel global.
                </p>

                {/* Badge de meta */}
                <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorPrimario5/10 border border-colorPrimario5/20 w-fit">
                  <Target className="w-4 h-4 text-colorPrimario5" />
                  <span className="text-sm font-semibold text-colorPrimario5">Meta 2030</span>
                </div>
              </div>
            </InViewAnimationWrapper>

            {/* Card Misión mejorada */}
            <InViewAnimationWrapper
              direction="x"
              offset={20}
              transition={{duration: 0.3, delay: 0.4}}
              className="w-full table-lg:w-4/5 table-lg:self-end table-lg:ml-auto bg-gradient-to-br from-colorHover5 to-colorHover6 
              rounded-3xl shadow-[0_0_30px_rgba(103,61,230,0.15)] hover:shadow-[0_0_40px_rgba(103,61,230,0.25)] 
              transition-all duration-300 overflow-hidden flex flex-col table-lg:flex-row-reverse border border-white/20 
              backdrop-blur-sm group"
            >
              {/* Imagen mejorada */}
              <div className="rounded-full relative p-8 table-lg:w-2/5 flex flex-col items-center justify-center bg-gradient-to-br from-colorSecundario1/10 to-colorSecundario2/10">
                <div className="relative">
                  <Image
                    width={800}
                    height={650}
                    src="/assets/images/mision.png"
                    alt="Misión de la empresa"
                    className="w-64 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 60vw, 300px"
                  />
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>

                {/* Círculo decorativo */}
                <div
                  className="animate-pulse absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 opacity-20"
                ></div>
              </div>

              {/* Contenido de texto mejorado */}
              <div className="table-lg:w-3/5 p-8 md-tablet:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md-tablet:text-4xl font-bold text-colorPrimario2">
                    Misión
                  </h2>
                </div>
                
                <p className="text-base md-tablet:text-lg text-colorPrimario1/80 mb-6 leading-relaxed">
                  Transformar ideas en soluciones digitales exitosas, utilizando tecnologías de vanguardia y un enfoque centrado en el usuario.
                </p>

                {/* Lista de valores mejorada */}
                <StaggerListContainer className="space-y-4">
                  {[
                    { icon: Users, text: "Contratar y desarrollar el mejor talento nacional e internacional" },
                    { icon: Globe, text: "Mantener transparencia total en operaciones y comunicaciones" },
                    { icon: Target, text: "Trabajar siempre de la mano con el cliente para cada proyecto" }
                  ].map((item, idx) => (
                    <StaggerListItemClient
                      key={idx}
                      direction="x"
                      offset={20}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white backdrop-blur-sm border border-white/20 hover:bg-white/50 transition-all duration-300 group/item"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:shadow-md transition-all duration-200">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm md-tablet:text-base text-colorPrimario1/80 leading-relaxed">
                        {item.text}
                      </span>
                    </StaggerListItemClient>
                  ))}
                </StaggerListContainer>
              </div>
            </InViewAnimationWrapper>
          </div>
        </div>
    </div>
  )
}