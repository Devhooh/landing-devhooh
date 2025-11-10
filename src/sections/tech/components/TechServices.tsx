import Image from "next/image";
import { Settings, CheckCircle } from "lucide-react";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import TechServiceCard from "@/components/cards/tech/TechServiceCard";

interface Service {
  title: string;
  description: string;
}

interface TechServicesProps {
  name: string;
  image: string;
  services: Service[];
}

export default function TechServices({ name, image, services }: TechServicesProps) {

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Badge superior */}
        <SimpleInViewWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Settings className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
            <strong className="text-colorPrimario5 font-semibold">Especialización técnica</strong>
          </div>
        </SimpleInViewWrapper>

        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center px-5 md-tablet:px-2">
          {/* Columna izquierda - Imagen y título */}
          <div className="space-y-8">
            <TextRevealClient
              direction="x"
              offset={-20}
              transition={{ duration: 0.3, delay: 0.3}}
            >
              <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl text-center table-lg:text-left font-extrabold leading-tight">
                Servicios de {""}
                  <strong className="text-colorPrimario5">
                    {name}
                  </strong>
                <br/>
                que brindamos
              </h2>
            </TextRevealClient>

            <TextRevealClient
              direction="x"
              offset={-20}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-lg md-tablet:text-xl text-gray-600 text-center table-lg:text-left max-w-xl mx-auto table-lg:mx-0">
                Transformamos su visión en realidad digital con soluciones escalables y de alto rendimiento utilizando la tecnología {name}. Nuestro equipo experto garantiza un producto final robusto y optimizado.
              </p>
            </TextRevealClient>

            {/* Imagen mejorada */}
            <SimpleInViewWrapper
              direction="x"
              offset={-20}
              transition={{duration: 0.3, delay: 0.4}}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(103,61,230,0.1)] group-hover:shadow-[0_0_40px_rgba(103,61,230,0.15)] transition-all duration-500 p-6">
                <Image
                  src={image}
                  alt={`Imagen de ${name}`}
                  width={500}
                  height={300}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-6 rounded-2xl bg-gradient-to-t from-colorDarkFondo4/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </SimpleInViewWrapper>
          </div>

          {/* Columna derecha - Servicios */}
          <div className="space-y-6">
            {services.map((service, index) => {
              return (
                <CardInViewStagger
                  key={index}
                  index={index}
                  direction="x"
                  offset={20}
                  className="
                    group relative p-6 md-tablet:p-8 rounded-3xl 
                    bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10 backdrop-blur-sm
                    border-2 border-white/20 hover:border-colorPrimario5/40
                    shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                    transition-all duration-300 hover:scale-[1.02]"
                >
                  <TechServiceCard
                    index={index}
                    title={service.title}
                    description={service.description}
                  />
                  
                </CardInViewStagger>
              );
            })}
          </div>
        </div>

        {/* Call to action final */}
        <SimpleInViewWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.3}}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Settings className="w-6 h-6 text-cyan-500 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Especialistas en {name} con experiencia comprobada
            </span>
            <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
          </div>
        </SimpleInViewWrapper>
      </div>
    </section>
  );
}