import Link from "next/link";
import Image from "next/image";
import { Code2, Sparkles } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

interface TechWhyProps {
  title: string;
  color: string;
  description: string;
  image: string;
  techs?: string[];
}


export default function TechWhy({
  title,
  description,
  image,
}: TechWhyProps) {
  return (
    <section className="flex justify-center px-4 py-16">
      <div
        className="
          relative flex flex-col gap-16
          bg-gradient-to-bl from-colorDarkFondo1 to-colorHover 
          text-white rounded-3xl p-8 md-tablet:p-12
          shadow-[0_0_50px_rgba(103,61,230,0.3)] border border-colorPrimario5/20 
          backdrop-blur-md max-w-6xl w-full
        "
      >
        {/* Decorativos */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40"></div>

        <FloatingWrapper className="absolute top-10 left-2 md-tablet:left-10 text-white">
          <Sparkles className="w-6 h-6 flex-shrink-0" />
        </FloatingWrapper>

        {/* Grid principal: imagen + texto */}
        <div className="grid grid-cols-1 tablet-md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <InViewAnimationWrapper
            direction="x"
            offset={-20}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center order-2 tablet-md:order-1"
          >
            <Image
              src={image}
              alt={`Imagen de ${title}`}
              width={500}
              height={300}
              loading="lazy"
              className="rounded-2xl object-cover w-80 h-auto shadow-lg"
            />
          </InViewAnimationWrapper>

          {/* Texto derecha */}
          <div className="order-1 tablet-md:order-2 text-center tablet-md:text-right flex flex-col items-center tablet-md:items-end">
            <InViewAnimationWrapper
              direction="x"
              offset={20}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h2 className="text-2xl tablet-md:text-3xl font-extrabold mb-4 leading-tight">
                ¿Por qué desarrollar con {title}
              </h2>
            </InViewAnimationWrapper>

            <InViewAnimationWrapper
              direction="x"
              offset={20}
              transition={{ duration: 0.3, delay: 0.5  }}
            >
              <p className="text-colorHover5 leading-relaxed mb-6 max-w-md">
                {description}
              </p>
            </InViewAnimationWrapper>

            {/* Botón premium */}
            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="
                  relative inline-flex items-center justify-center px-7 py-3 
                  rounded-2xl font-semibold tracking-wide
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario1
                  text-white shadow-lg hover:shadow-2xl 
                  transition-transform duration-300 hover:scale-[1.03]
                  overflow-hidden group
                "
              >
                <span className="relative z-10">Solicita presupuesto</span>
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-transparent to-white/20 
                  group-hover:translate-x-[100%] transition-transform duration-700"
                />
              </Link>
            </InViewAnimationWrapper>
          </div>
        </div>

        {/* Estadísticas del stack */}
        <StaggerListContainer
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {data: "100%", text: "Experiencia de uso"},
            {data: "✓", text: "Rendimiento garantizado"},
            {data: "100%", text: "Buenas practicas"},
          ].map((value, index) => (

            <StaggerListItemClient
              key={index} 
              index={index}
              direction="y"
              offset={30}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold text-colorPrimario5 mb-2">
                {value.data}
              </div>
              <p className="text-sm text-colorPrimario1/90">
                {value.text}
              </p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

        {/* Call to action final */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.3}}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-3 rounded-3xl
            bg-gradient-to-r from-colorPrimario5/50 to-colorSecundario1/50 border border-colorPrimario5/20">
            <Code2 className="w-5 h-5 text-colorDarkFondo1 flex-shrink-0" />
            <strong className="text-white font-semibold">
              Stack optimizado para máximo rendimiento
            </strong>
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}
