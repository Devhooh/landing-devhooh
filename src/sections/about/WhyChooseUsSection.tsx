import Image from "next/image";
import { Zap, Wrench, Users, Shield, TrendingUp, Check } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Entregas rápidas y confiables",
      description: "Cumplimos plazos y garantizamos que tu proyecto esté listo para despegar sin retrasos, utilizando metodologías ágiles probadas.",
      image: "/assets/icons/fast.png",
      alt: "Entregas rápidas y confiables",
      icon: Zap,
      gradient: "from-colorPrimario5/10 to-colorPrimario6/10",
      iconGradient: "from-colorSecundario1 to-colorSecundario2",
      benefits: [
        {icon: Check, text: "Metodologías ágiles"},
        {icon: Check, text: "Plazos garantizados"},
        {icon: Check, text: "Entregas por sprints"},
      ]
    },
    {
      title: "Soluciones a medida",
      description: "Cada proyecto es único. Diseñamos estrategias y software que se adaptan exactamente a lo que tu negocio necesita.",
      image: "/assets/icons/solution.png",
      alt: "Soluciones a medida",
      icon: Wrench,
      gradient: "from-colorSecundario1/10 to-colorSecundario2/10",
      iconGradient: "from-colorSecundario1 to-colorSecundario2",
      benefits: [
        {icon: Check, text: "Desarrollo personalizado"},
        {icon: Check, text: "Arquitectura escalable"},
        {icon: Check, text: "Tecnologías modernas"}
      ]
    },
    {
      title: "Trabajo colaborativo",
      description: "Te mantenemos al tanto en cada fase con comunicación transparente y herramientas de seguimiento en tiempo real.",
      image: "/assets/icons/collaborative.png",
      alt: "Trabajo colaborativo",
      icon: Users,
      gradient: "from-colorPrimario7/10 to-colorPrimario8/10",
      iconGradient: "from-colorSecundario1 to-colorSecundario2",
      benefits: [
        {icon: Check, text: "Comunicación directa"},
        {icon: Check, text: "Updates constantes"},
        {icon: Check, text: "Tu participación activa"}
      ]
    },
    {
      title: "Seguridad y calidad",
      description: "Aplicamos buenas prácticas de desarrollo para asegurar que tu producto sea confiable, escalable y completamente protegido.",
      image: "/assets/icons/securities.png",
      alt: "Seguridad y calidad",
      icon: Shield,
      gradient: "from-colorSecundario3/10 to-colorSecundario4/10",
      iconGradient: "from-colorSecundario1 to-colorSecundario2",
      benefits: [
        {icon: Check, text: "Código limpio"},
        {icon: Check, text: "Testing riguroso"},
        {icon: Check, text: "Seguridad avanzada"}
      ]
    },
    {
      title: "Crecimiento garantizado",
      description: "Creamos soluciones que no solo funcionan hoy, sino que ayudan a que tu negocio evolucione y escale en el futuro.",
      image: "/assets/icons/guaranteed.png",
      alt: "Crecimiento garantizado",
      icon: TrendingUp,
      gradient: "from-colorPrimario5/10 to-colorSecundario1/10",
      iconGradient: "from-colorSecundario1 to-colorSecundario2",
      benefits: [
        {icon: Check, text: "Arquitectura escalable"},
        {icon: Check, text: "Métricas de rendimiento"},
        {icon: Check, text: "Soporte continuo"}
      ]
    },
  ];

  return (
    <section id="whydevhooh" className="relative bg-white py-20 overflow-hidden">

      <div className="container mx-auto max-w-[1400px] text-center px-6 md-tablet:px-10 relative z-10">
        
        {/* Encabezado mejorado */}
        <div className="mb-20">
          {/* Título animado letra por letra */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2">
              ¿Por qué elegir Devhooh?
            </h2>
          </InViewAnimationWrapper>
          
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed">
              Cinco razones clave que nos convierten en el socio ideal para transformar tu visión en una solución digital exitosa
            </p>
          </InViewAnimationWrapper>

        </div>

        {/* Cards mejoradas en zigzag */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <ProjectStaggerWrapper
              key={index}
              index={index}
              className={`flex justify-center ${index % 2 === 0 ? "" : ""}`}
            >
              <div
                className={`
                  group relative max-w-6xl w-full
                  bg-gradient-to-br ${feature.gradient} backdrop-blur-sm
                  border-2 border-white/20 hover:border-colorPrimario5/30
                  rounded-3xl p-8 md-tablet:p-12 shadow-[0_0_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_0_40px_rgba(103,61,230,0.15)]
                  transition-all duration-500
                  flex flex-col table-lg:flex-row items-center gap-8 md-tablet:gap-12
                  ${index % 2 !== 0 ? "table-lg:flex-row-reverse" : ""}
                `}
              >
                
                {/* Efectos decorativos */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Badge numerado */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-lg flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Contenedor de imagen mejorado */}
                <div className="table-lg:w-1/3 flex flex-col items-center">
                  <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={120}
                      height={120}
                      className="w-24 h-24 md-tablet:w-28 md-tablet:h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Overlay con icono */}
                    <div className={`absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r ${feature.iconGradient} flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Contenido de texto mejorado */}
                <div className={`table-lg:w-2/3 text-center ${
                  index % 2 === 0 ? "table-lg:text-left" : "table-lg:text-right"
                }`}>
                  
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario2 mb-4 group-hover:text-colorPrimario5 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Lista de beneficios */}
                  <StaggerListContainer className={`flex flex-wrap gap-3 ${index % 2 === 0 ? "justify-center table-lg:justify-start" : "justify-center table-lg:justify-end"}`}>
                    {feature.benefits.map((benefit, idx) => (
                      <StaggerListItemClient
                        key={idx}
                        index={index}
                        direction="x"
                        offset={20}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-white/30 hover:bg-white transition-all duration-300"
                      >
                        <div className="w-6 h-6 rounded-xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:shadow-md transition-all duration-200">
                          <benefit.icon className="w-4 h-4 text-white"/>
                        </div>
                        <p className="text-sm font-medium text-colorPrimario2">
                          {benefit.text}
                        </p>
                      </StaggerListItemClient>
                    ))}
                  </StaggerListContainer>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </ProjectStaggerWrapper>
          ))}
        </div>

        {/* Call to action final */}
        <InViewAnimationWrapper
          direction="y"
          offset={40}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
            <span className="text-colorPrimario5 font-semibold text-lg">
              ¿Listo para empezar tu proyecto?
            </span>
            <div className="w-2 h-2 rounded-full bg-colorSecundario1 animate-pulse"></div>
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}