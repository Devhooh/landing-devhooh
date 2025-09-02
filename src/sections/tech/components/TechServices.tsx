"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col tablet-md:flex-row items-start tablet-md:items-center gap-10">
        {/* Columna izquierda */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="tablet-md:w-1/2 flex flex-col items-center text-center mx-auto"
        >
          {/* Separamos el título de la imagen */}
          <h2 className="text-4xl text-blue-950 font-bold pb-16 items-center text-center">
            Servicios de {name} que brindamos
          </h2>

          <div className="w-full mt-4 pt-16 tablet-md:mt-0">
            <Image
              src={image}
              alt={`Imagen de ${name}`}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Columna derecha */}
        <div className="tablet-md:w-1/2 flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-4 bg-fuchsia-200 border border-fuchsia-500 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl text-fuchsia-950 font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
