import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import ButtonCta from "@/components/ui/ButtonCta";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

export default function CTAServices() {
  const decorativeItems = [
    { type: 'icon', element: <Sparkles className="w-8 h-8 text-colorPrimario7" /> },
    { type: 'divider', element: <div className="h-px w-16 bg-gradient-to-r from-transparent via-colorHover5 to-transparent"></div> },
    { type: 'icon', element: <Users className="w-10 h-10 text-colorPrimario7" /> },
    { type: 'divider', element: <div className="h-px w-16 bg-gradient-to-r from-transparent via-colorHover5 to-transparent"></div> },
    { type: 'icon', element: <Sparkles className="w-8 h-8 text-colorPrimario7" /> },
  ];

  const quickLinks = [
    { href: "/portfolio", text: "Ver nuestro portafolio" },
    { href: "/about", text: "Conoce nuestro equipo" },
    { href: "/services", text: "Nuestros servicios" },
];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-8">
          
          {/* Título principal animado */}
          <TextRevealClient
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
          </TextRevealClient>

          {/* Elementos visuales decorativos */}
          <StaggerListContainer
            delayChildren={0.2}
            className="flex justify-center items-center gap-4 my-12"
          >
            {decorativeItems.map((item, index) => (
              <StaggerListItemClient
                key={index}
                direction="y"
                offset={30}
                transition={{ duration: 0.2 }}
              >
                {item.type === 'icon' ? (
                  <FloatingWrapper>
                      {item.element}
                  </FloatingWrapper>
                ) : (
                  item.element
                )}
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          {/* Botón principal mejorado */}
          <SimpleInViewWrapper
            direction="y"
            offset={20}
            className="flex justify-center mb-10"
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ButtonCta
              href="/contact"
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
            </ButtonCta>
          </SimpleInViewWrapper>

          {/* Estadísticas de confianza */}
          <StaggerListContainer 
            delayChildren={0.3}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
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
          <div className="max-w-3xl mx-auto">
            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="text-lg md-tablet:text-xl text-colorHover5 font-semibold leading-relaxed mb-6">
                Desde startups hasta grandes empresas, 
                <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text font-bold">
                  {" "}tú puedes ser el siguiente
                </span>
              </p>
            </TextRevealClient>
            
            {/* Call to action secundario */}
            <StaggerListContainer 
              delayChildren={0.2}
              className="flex flex-wrap justify-center gap-5 text-base"
            >
              {quickLinks.map((value, index) => (
                <StaggerListItemClient
                  key={index}
                  direction="x"
                  offset={-20}
                  transition={{duration: 0.2}}
                >
                  <Link 
                    href={value.href}
                    className="text-colorHover5 hover:text-colorPrimario7 duration-300 
                      underline underline-offset-4 hover:underline-offset-8 transform transition-all"
                  >
                    {value.text}
                  </Link>
                </StaggerListItemClient>
              ))}
            </StaggerListContainer>
          </div>
        </div>
      </div>
    </section>
  );
}