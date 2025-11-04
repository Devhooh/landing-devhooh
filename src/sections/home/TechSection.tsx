import ButtonCta from "@/components/ui/ButtonCta";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { Code, Database, Smartphone, Cloud, ArrowRight } from "lucide-react";

export default function TechSection() {
  const technologies = [
    {
      icon: <Code className="w-7 h-7 text-white" />,
      title: "Desarrollo Frontend (UI/UX)",
      description: "React (Next.js), TypeScript y TailwindCSS para crear interfaces rápidas, modernas y centradas en la Experiencia de Usuario (UX).",
    },
    {
      icon: <Database className="w-7 h-7 text-white" />,
      title: "Arquitectura Backend y APIs",
      description: "Node.js (Express) y diseño de APIs modulares con buenas prácticas de seguridad y alto rendimiento.",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-white" />,
      title: "Desarrollo de Apps Móviles Multiplataforma",
      description: "Aplicaciones multiplataforma rápidas con React Native o Flutter, garantizando la misma experiencia de alta calidad en iOS y Android.",
    },
    {
      icon: <Cloud className="w-7 h-7 text-white" />,
      title: "Cloud Computing y DevOps",
      description: "Despliegue escalable y DevOps usando Vercel o AWS/Azure, asegurando la alta disponibilidad y el rendimiento 24/7.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-colorHover5 to-colorHover6">
      <div className="mx-auto text-center">
        {/* Contenido principal */}
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Título animado letra por letra */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          >
            <h2 className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2">
              Nuestro stack tecnológico
            </h2>
          </TextRevealClient>
          
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.4, ease: "easeInOut"}}
          >
            <p className="text-colorPrimario1/80 mb-16 max-w-3xl mx-auto text-lg md-tablet:text-xl">
              Nuestro enfoque se basa en el alto rendimiento y la escalabilidad. Utilizamos tecnologías de vanguardia como Next.js, React y Node.js para construir aplicaciones robústas, seguras y a prueba de futuro.
            </p>
          </TextRevealClient>

          {/* Grid de tecnologías */}
          <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-8 mb-16">
            {technologies.map((tech, idx) => (
              <CardInViewStagger
                key={idx}
                index={idx + 0.1}
                className="relative group p-6 rounded-3xl bg-gradient-to-br from-colorSecundario3/10 to-colorSecundario4/10 
                  backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]"
              >
                {/* Icono flotante */}
                <div
                  className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-colorSecundario1 to-colorSecundario2 
                    flex items-center justify-center mb-4 shadow-lg"
                >
                  <div className="text-white">
                    {tech.icon}
                  </div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-colorPrimario2 mb-3">
                  {tech.title}
                </h3>
                
                <p className="text-colorPrimario1/70 text-base leading-relaxed">
                  {tech.description}
                </p>

                {/* Indicador decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-colorPrimario5/30 group-hover:bg-colorPrimario5 transition-colors duration-300"></div>
              </CardInViewStagger>
            ))}
          </div>

          {/* Botón */}
          <SimpleInViewWrapper
            direction="y" 
            offset={20} 
            transition={{duration: 0.3, delay: 0.2}}
            className="flex justify-center"
          >
            <div className="group">
              <ButtonCta
                href="/services"
                icon={ArrowRight}
                className="relative overflow-hidden text-lg md-tablet:text-xl 
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario2 
                  text-white py-4 px-10 rounded-2xl font-semibold 
                  shadow-[0_0_25px_rgba(103,61,230,0.3)] hover:shadow-[0_0_35px_rgba(103,61,230,0.5)] transition-all duration-300 flex items-center gap-3
                  hover:scale-[1.05] active:scale-[0.98] transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <p className="relative z-10">
                    Explora todas nuestras tecnologías
                  </p>
              </ButtonCta>
            </div>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
} 
