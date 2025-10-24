import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function CTASlugfolio() {

  const stats = [
    { value: "50+", label: "Proyectos completados", color: "from-colorPrimario5 to-colorSecundario1" },
    { value: "98%", label: "Clientes satisfechos", color: "from-colorPrimario5 to-colorSecundario1" },
    { value: "24h", label: "Soporte garantizado", color: "from-colorPrimario5 to-colorSecundario1" },
  ];

  return (
    <section className="relative w-full pb-28 pt-14 px-5 tablet-md:px-10 flex justify-center overflow-hidden text-white">
      {/* Contenedor principal */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-8 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 p-10 rounded-3xl shadow-2xl text-center">
        
        {/* Título animado letra por letra */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="text-3xl tablet-md:text-5xl font-extrabold leading-tight">
            Innovación tecnológica que impulsa tu negocio
          </h2>
        </InViewAnimationWrapper>

        {/* Subtítulo */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <p className="text-base tablet-md:text-xl text-gray-200 max-w-3xl">
            Desarrollamos soluciones digitales con seguridad, escalabilidad y un enfoque personalizado para maximizar tu crecimiento.
          </p>
        </InViewAnimationWrapper>


        {/* Botón principal */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{duration:0.4, delay: 0.3}}
        >
          <Link href="/contact">
            <button
              className="
                relative group inline-flex items-center gap-3 px-10 py-4 font-bold text-lg rounded-xl 
                bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 shadow-lg overflow-hidden
                hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
            >
              {/* Brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-2">
                Ponte en contacto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </InViewAnimationWrapper>

        {/* Stats / badges */}
        <StaggerListContainer className="flex flex-wrap justify-center gap-6 mt-12">
          {stats.map((stat, idx) => (
            <StaggerListItemClient
              key={idx}
              direction="y"
              offset={30}
              className={`px-6 py-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-base">{stat.label}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>
      </div>
    </section>
  );
}
