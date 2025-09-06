"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Eye, Target, Users, Globe } from "lucide-react";

const centralVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const visionVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const missionVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <div className="bg-white pt-16 w-full">
      <div className="container mx-auto max-w-[1550px]">
        
        {/* Card central */}
        <div className="flex justify-center mb-32">
          <motion.div
            variants={centralVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="
              bg-gradient-to-b from-colorDarkFondo2 to-colorPrimario5 
              text-white rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.25)] 
              border border-white/10 backdrop-blur-md
              max-w-5xl text-center mx-4 md-tablet:mx-8 px-2"
          >
            <h2 className="text-3xl table-lg:text-4xl font-extrabold mb-10">
              Cuando la confianza es alta, la comunicación es fácil, instantánea y efectiva.
            </h2>
            <p className="text-lg table-lg:text-xl font-light italic leading-relaxed max-w-3xl mx-auto">
              En solo 4 años, Devhooh ha ayudado a startups y empresas a transformar sus ideas en soluciones digitales reales. 
              Con un equipo apasionado por la innovación, combinamos diseño, desarrollo y tecnologías modernas para que tu proyecto brille desde el primer día.
            </p>
          </motion.div>
        </div>

        {/* Contenedor de las cards */}
        <div className="
          flex flex-col space-y-16 px-4 md-tablet:px-10 py-24 w-full
          bg-gradient-to-b from-colorPrimario5 to-colorSecundario4">
          {/* Card Visión */}
          <motion.div
            variants={visionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="
              w-full table-lg:w-3/4 table-lg:self-start 
              bg-white rounded-2xl border border-colorPrimarioLogo1/40
              shadow-lg hover:shadow-2xl transition-all duration-300
              overflow-hidden flex flex-col table-lg:flex-row"
          >
            {/* Imagen / Icono */}
            <div className="
              relative p-6 table-lg:w-1/3 flex flex-col items-center justify-center 
              bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10">
              <Image
                width={400}
                height={400}
                src="/assets/images/vision.png"
                alt="Visión de la empresa"
                className="w-52 h-auto object-contain"
              />
            </div>
            {/* Texto */}
            <div className="table-lg:w-2/3 p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-colorPrimario2 mb-6 flex items-center gap-3">
                <Eye className="w-14 h-14 text-colorPrimario2" /> Visión
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Entregar proyectos que superen expectativas, siempre a tiempo, confiables y escalables.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                En los próximos 3 a 5 años, nuestra meta es posicionarnos como una de las empresas tecnológicas más importantes del país y con presencia internacional, capaz de competir a nivel global.
              </p>
            </div>
          </motion.div>

          {/* Card Misión */}
          <motion.div
            variants={missionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="
              w-full table-lg:w-3/4 table-lg:self-end 
              bg-white rounded-2xl border border-colorPrimarioLogo1/40
              shadow-lg hover:shadow-2xl transition-all duration-300
              overflow-hidden flex flex-col table-lg:flex-row-reverse"
          >
            {/* Imagen / Icono */}
            <div className="
              relative p-6 table-lg:w-1/3 flex flex-col items-center justify-center 
              bg-gradient-to-br from-colorPrimario6/10 to-colorPrimario5/10">
              <Image
                width={400}
                height={400}
                src="/assets/images/mision.png"
                alt="Misión de la empresa"
                className="w-52 h-auto object-contain"
              />
            </div>
            {/* Texto */}
            <div className="table-lg:w-2/3 p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-colorPrimario2 mb-6 flex items-center gap-3">
                <Users className="w-14 h-14 text-colorPrimario2" /> Misión
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Ayudar a las personas a construir y hacer realidad sus ideas a través de soluciones de TI innovadoras, utilizando tecnologías modernas que la empresa ofrece.
              </p>
              <ul className="space-y-3 text-base text-gray-700 leading-relaxed">
                <li className="flex items-center gap-2">
                  <Users className="w-12 h-12 md-tablet:w-6 tablet-md:h-6 text-colorPrimario5" />
                  Contratar y desarrollar el mejor talento nacional e internacional.
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-12 h-12 md-tablet:w-6 tablet-md:h-6 text-colorPrimario5" />
                  Mantener una transparencia total en todas las operaciones y comunicaciones.
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-12 h-12 md-tablet:w-6 tablet-md:h-6 text-colorPrimario5" />
                  Trabajar siempre de la mano con el cliente y las personas adecuadas para cada proyecto.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
