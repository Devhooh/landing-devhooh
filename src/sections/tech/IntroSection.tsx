"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

// 1. Cargamos el componente SliderTech Y los datos (sliderLogoTech) de forma dinámica.
const DynamicSliderCarousel = dynamic(() =>
  Promise.all([
    import("./SliderTech").then((mod) => mod.SliderTech),
    import("@/data/sliderLogoTech").then((mod) => mod.sliderLogoTech),
  ]).then(([SliderTech, sliderLogoTech]) => {
    
    const DynamicRenderer = () => (
      <>
        <SliderTech logos={sliderLogoTech} direction="left" />
        <SliderTech logos={sliderLogoTech} direction="right" />
      </>
    );

    // 2. Asigna el display name
    DynamicRenderer.displayName = "DynamicSliderRenderer"; 

    // 3. Devuelve el componente con nombre
    return DynamicRenderer;
  }),
  {
    loading: () => <div className="h-20 w-full bg-gray-900 animate-pulse border-y border-gray-700"></div>, 
    ssr: false, 
  }
);

export default function IntroSection() {
  return (
    <section className="w-full pb-5 pt-16 mx-auto">

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="flex justify-center px-4">

        {/* Hero de Tecnología */}
          <div className="
            max-w-5xl mx-auto px-10 text-center items-center space-y-4 relative backdrop-blur-md
            bg-gradient-to-b from-colorHover2/10 to-colorHover3 py-5 rounded-3xl"
          >
            {/* Efectos decorativos en la card */}
            <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-colorPrimario5 opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-colorSecundario3 opacity-40"></div>
            
            
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-extrabold text-colorPrimario1 pb-5"
            >
              Todo lo que necesitas para {""}
              <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">construir y escalar</span>
              
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-colorPrimario1 md-tablet:text-xl max-w-3xl mx-auto"
            >
              Utilizamos herramientas modernas que aseguran rendimiento,
              escalabilidad y experiencias inolvidables. No solo se trata de usar
              tecnología, sino de cómo la aplicamos para hacer crecer tu proyecto.
            </motion.p>

            {/* Badge de años de experiencia */}
            <motion.div
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-colorPrimario5 border border-colorPrimario5/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-colorHover5 font-semibold">Empieza tu proyecto con calidad</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Carrusel de logos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="overflow-hidden mt-12 py-5 mx-auto bg-colorPrimario5 border-y border-colorSecundario3"
      >
        {/* Renderizamos el componente dinámico sin pasar props */}
        <DynamicSliderCarousel /> 
      </motion.div>

      {/* Bloque de Kit Tecnológico */}
      <div className="overflow-hidden mx-auto mt-16 px-5 md-tablet:px-10 space-y-4 pb-5 text-left">
        <motion.h3
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md-tablet:text-3xl font-extrabold text-colorPrimario1"
        >
          De un vistazo a nuestro kit <br />de herramientas <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> tecnológicas</span>
        </motion.h3>

        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md-tablet:text-xl max-w-2xl text-gray-700"
        >
          Profundizamos en las necesidades de su proyecto para asegurarnos de
          seleccionar las mejores herramientas y marcos para su producto. La
          mayoría de los proyectos en los que trabajamos se dividen en el
          siguiente stack de tecnológicas.
        </motion.p>
      </div>
    </section>
  );
}
