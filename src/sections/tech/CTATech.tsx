import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import ButtonCta from "@/components/ui/ButtonCta";

export default function CTASlugfolio() {

  const stats = [
    { 
      value: "50+", 
      label: "Proyectos completados", 
      icon: Sparkles,
    },
    { 
      value: "98%", 
      label: "Clientes satisfechos", 
      icon: Shield,
    },
    { 
      value: "24h", 
      label: "Soporte garantizado", 
      icon: Zap,
    },
  ];

  return (
    <section className="relative w-full py-8 md-tablet:py-16 px-5 tablet-md:px-10 flex justify-center overflow-hidden">
      {/* Background con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-colorFondo via-colorHover5/30 to-colorHover6/50"></div>
      
      {/* Grid decorativo sutil */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Contenedor principal con glassmorphism */}
        <div className="relative flex flex-col items-center gap-10 bg-white/80 backdrop-blur-xl p-8 md-tablet:p-12 table-lg:p-16 rounded-3xl shadow-2xl border border-colorPrimarioLogo1/10">
          
          {/* Badge superior */}
          <SimpleInViewWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 rounded-full border border-colorPrimarioLogo1/20">
              <div className="w-2 h-2 bg-colorPrimario5 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text text-transparent">
                Transformación Digital
              </span>
            </div>
          </SimpleInViewWrapper>

          {/* Título principal con gradiente */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold leading-tight text-center max-w-3xl">
              <span className="bg-gradient-to-r from-colorPrimarioLogo1 to-colorSecundario bg-clip-text text-transparent">
                Innovación tecnológica
              </span>
              <br />
              <span className="text-colorPrimario1">
                que impulsa tu negocio
              </span>
            </h2>
          </TextRevealClient>

          {/* Línea decorativa */}
          <SimpleInViewWrapper
            direction="x"
            offset={50}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-colorPrimario5 via-colorSecundario1 to-colorPrimarioLogo1 rounded-full"></div>
          </SimpleInViewWrapper>

          {/* Subtítulo */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/70 max-w-2xl text-center leading-relaxed">
              Desarrollamos soluciones digitales con <span className="font-semibold text-colorPrimarioLogo1">seguridad</span>, <span className="font-semibold text-colorPrimarioLogo1">escalabilidad</span> y un enfoque personalizado para maximizar tu crecimiento.
            </p>
          </TextRevealClient>

          {/* Stats con diseño mejorado */}
          <StaggerListContainer className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
            {stats.map((stat, idx) => (
              <StaggerListItemClient
                key={idx}
                direction="y"
                offset={30}
                className="group"
              >
                <div className="relative h-full px-6 py-6 rounded-2xl bg-gradient-to-br from-colorSecundario1 via-colorSecundario2 to-colorPrimarioLogo1
                  shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Brillo hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>

                  <div className="relative z-10 flex flex-col items-center gap-3 text-white">
                    <stat.icon className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl md-tablet:text-5xl font-bold drop-shadow-lg">{stat.value}</div>
                    <p className="text-sm md-tablet:text-base font-medium opacity-95">{stat.label}</p>
                  </div>

                  {/* Indicador decorativo */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 group-hover:bg-white/40 transition-all duration-300"></div>
                </div>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          {/* Botón principal mejorado */}
          <SimpleInViewWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ButtonCta
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-6 py-5 font-bold text-lg rounded-2xl 
              bg-gradient-to-r from-colorPrimario5 via-colorPrimario6 to-colorSecundario1 text-white shadow-xl shadow-colorPrimario5/30 
              overflow-hidden hover:shadow-2xl hover:shadow-colorPrimario5/40 
              transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Partículas decorativas */}
              <div className="absolute inset-0">
                <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.2s' }}></div>
              </div>

              <span className="relative z-10 flex items-center gap-3">
                Ponte en contacto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </ButtonCta>
          </SimpleInViewWrapper>

          {/* Texto adicional pequeño */}
          <SimpleInViewWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-base text-colorPrimario1/50 text-center mt-4">
              ¿Listo para llevar tu negocio al siguiente nivel? 
              <span className="font-semibold text-colorPrimarioLogo1 ml-1">Hablemos hoy.</span>
            </p>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}