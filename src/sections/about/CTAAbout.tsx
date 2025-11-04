import Link from "next/link";
import { ArrowRight, Shield, Users, Zap, Star } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function CTAAbout() {

  const features = [
    {
      icon: Shield,
      title: "Confianza",
      description: "Socio estratégico de largo plazo",
      color: "colorPrimario5"
    },
    {
      icon: Zap,
      title: "Resultados",
      description: "Mejoramos conversiones reales",
      color: "colorPrimario5"
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos junto a tu equipo",
      color: "colorPrimario5"
    }
  ];

  return (
    <section className="relative w-full py-20 mt-10 overflow-hidden">
      
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorHover5 via-colorHover6 to-colorHover5"></div>
      
      {/* Efectos decorativos de fondo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Contenido principal */}
        <div className="space-y-12">
          
          {/* Título principal mejorado */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.2, delay: 0.3}}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold leading-tight mb-6">
              Devhooh es el socio 
              <br />
              en quien puedes confiar
            </h2>
          </InViewAnimationWrapper>
          
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.4}}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed">
              Transformamos tu visión en soluciones digitales exitosas. Mejoramos la experiencia de usuario, 
              aumentamos conversiones y creamos plataformas escalables que impulsan el crecimiento de tu negocio.
            </p>
          </InViewAnimationWrapper>

          {/* Características destacadas */}
          <StaggerListContainer
            className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, idx) => (
              <StaggerListItemClient
                key={idx}
                direction="y"
                offset={30}
                className="relative p-6 rounded-2xl bg-white backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${feature.color} to-colorSecundario2 flex items-center justify-center mb-4 mx-auto shadow-lg`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-colorPrimario2 mb-2">
                  {feature.title}
                </h3>
                <p className="text-colorPrimario1/70 text-sm">
                  {feature.description}
                </p>

                {/* Efecto decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          {/* Badge de calidad */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.3}}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm">
              <Star className="w-5 h-5 text-colorPrimario5 fill-current" />
              <span className="text-colorPrimario5 font-semibold">
                Calidad garantizada
              </span>
              <Star className="w-5 h-5 text-colorSecundario1 fill-current" />
            </div>
          </InViewAnimationWrapper>

          {/* Botón principal mejorado */}
          <div className="flex flex-col md-tablet:flex-row gap-4 justify-center items-center">

            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.4}}
            >
              <Link href="/contact">
                <button
                  className="
                    group relative overflow-hidden px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
                    text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)] 
                    transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] transform"
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Hablemos de tu proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </InViewAnimationWrapper>

            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.5}}
            >
              <Link href="/portfolio">
                <button
                  className="
                    px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-colorPrimario5 text-colorPrimario5 
                    hover:bg-colorPrimario5 hover:text-white
                    transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] transform"
                >
                  Ver nuestros casos de éxito
                </button>
              </Link>
            </InViewAnimationWrapper>
          </div>

          {/* Estadísticas de confianza */}
          <StaggerListContainer className="flex flex-wrap justify-center gap-8 pt-8">
            {[
              {data: "5+", text: "Años de experiencia"},
              {data: "20+", text: "Proyectos entregados"},
              {data: "98%", text: "Satisfacción del cliente"},
            ].map((value, index) => (
              <StaggerListItemClient 
                key={index} 
                direction="y"
                offset={30}
                className="text-center"
              >
                <div className="text-3xl font-bold text-colorPrimario5">{value.data}</div>
                <p className="text-sm text-colorPrimario1/70">{value.text}</p>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          {/* Mensaje final */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.2}}
          >
            <p className="text-colorPrimario1/60 text-sm italic max-w-2xl mx-auto pt-6">
              Transformando ideas en soluciones digitales exitosas desde 2021
            </p>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
}