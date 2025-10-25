import Image from "next/image";
import { Lightbulb, Heart, Users, TrendingUp, Shield } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";

export default function OurValuesSection() {
  const values = [
    {
      title: "Innovación constante",
      description: "Adoptamos tecnologías modernas como IA y Blockchain para crear soluciones únicas y mantenernos a la vanguardia del desarrollo.",
      image: "/assets/images/innovacion.png",
      alt: "Innovación constante",
      icon: Lightbulb,
      iconGradient: "from-colorPrimario5 to-colorPrimario6",
      borderColor: "colorPrimario5/20"
    },
    {
      title: "Calidad y enfoque al cliente",
      description: "Entregamos software confiable y eficiente, siempre adaptado a las necesidades específicas de cada cliente.",
      image: "/assets/images/calidad.png",
      alt: "Calidad y enfoque al cliente",
      icon: Heart,
      iconGradient: "from-colorSecundario1 to-colorSecundario2",
      borderColor: "colorSecundario1/20"
    },
    {
      title: "Transparencia y colaboración",
      description: "Fomentamos comunicación clara y trabajo conjunto, generando confianza y proyectos exitosos.",
      image: "/assets/images/transparencia.png",
      alt: "Transparencia y colaboración",
      icon: Users,
      iconGradient: "from-colorPrimario7 to-colorPrimario8",
      borderColor: "colorPrimario7/20"
    },
    {
      title: "Crecimiento y excelencia",
      description: "Impulsamos el aprendizaje constante y la mejora profesional para ofrecer soluciones competitivas.",
      image: "/assets/images/crecimiento.png",
      alt: "Crecimiento y excelencia continua",
      icon: TrendingUp,
      iconGradient: "from-colorSecundario3 to-colorSecundario4",
      borderColor: "colorSecundario3/20"
    },
    {
      title: "Responsabilidad y cumplimiento",
      description: "Cumplimos con lo prometido, entregando proyectos a tiempo y con los más altos estándares de calidad.",
      image: "/assets/images/responsabilidad.png",
      alt: "Responsabilidad y cumplimiento",
      icon: Shield,
      iconGradient: "from-colorPrimario5 to-colorSecundario1",
      borderColor: "colorPrimario5/20"
    },
  ];

  return (
    <section id="valores" className="relative bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 py-20 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] text-center px-7 md-tablet:px-10 relative z-10">
        {/* Título mejorado */}
        <div className="mb-16">

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2">
              Nuestros valores
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto">
              Los principios que guían cada proyecto y definen nuestra forma de trabajar contigo
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Grid de valores mejorado */}
        <div className="flex flex-wrap justify-center gap-6">
          {values.map((value, index) => (
            <ProjectStaggerWrapper
              key={index}
              index={index}
              className={`
                group relative bg-white/70 
                border-2 border-${value.borderColor}
                rounded-3xl p-8 flex flex-col items-center text-center 
                w-full max-w-sm hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                transition-all duration-300 hover:border-colorPrimario5/40
              `}
            >
              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Contenedor de imagen con efecto */}
              <div className="relative mb-6">
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10  backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    width={120}
                    height={120}
                    src={value.image}
                    alt={value.alt}
                    className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay con icono */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Círculo decorativo flotante */}
                <div
                  className={`animate-pulse absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r ${value.iconGradient} opacity-20`}
                ></div>
              </div>

              {/* Contenido de texto */}
              <div className="space-y-4">
                <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-colorPrimario1/80 text-sm md-tablet:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Badge numerado */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </ProjectStaggerWrapper>
          ))}
        </div>

        {/* Call to action final */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          className="mt-16 text-center"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-colorPrimario1/70 mb-4 text-lg">
            ¿Te identificas con nuestros valores?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20">
            <span className="text-colorPrimario5 font-semibold">
              Trabajemos juntos en tu próximo proyecto
            </span>
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}