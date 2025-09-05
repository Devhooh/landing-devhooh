"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroCenterProps {
  title: string;
  subtitle: string;
  cta: string;
  images: string[];
  features?: string[];
}

export default function HeroCenter({ title, subtitle, cta, images, features = [] }: HeroCenterProps) {
  return (
    <section className="h-auto">
      <div className="max-w-[1550px] mx-auto px-6 pt-10 md-tablet:pt-4 table-lg:pt-0 md-tablet:px-12">
        <div className="grid grid-cols-1 table-lg:grid-cols-3 items-center gap-6">

          {/* Imagen izquierda */}
          {images[0] && (
            <motion.div
              className="hidden table-lg:flex justify-end table-lg:mb-16 "
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={images[0]}
                alt={title}
                width={500}
                height={500}
                className="flex-1 max-h-64 object-contain rounded-lg"
              />
            </motion.div>
          )}

          {/* Contenedor central */}
          <div className="flex flex-col items-center text-center gap-8 col-span-1">
            
            {/* Título */}
            <motion.div
              className="md-tablet:mt-2"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-5 text-4xl md-tablet:text-5xl table-lg:text-4xl font-extrabold leading-tight text-white">
                {title}
              </h2>
            </motion.div>

            {/* Imagen para mobile */}
            {images[0] && (
              <motion.div
                className="table-lg:hidden my-14"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Image
                  src={images[0]}
                  alt={title}
                  width={500}
                  height={500}
                  className="flex-1 w-96 max-h-64 object-contain rounded-lg"
                />
              </motion.div>
            )}

            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md-tablet:text-xl text-gray-200 max-w-2xl">
                {subtitle}
              </p>
            </motion.div>

            {/* Lista */}
            {features.length > 0 && (
              <motion.ul
                className="mt-10 table-lg:mt-0 md-tablet:mt-4 space-y-4 text-white text-left max-w-md"
                initial="hidden"
                whileInView="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } },
                }}
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-base md-tablet:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* Botón CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 table-lg:mt-1 mb-8 table-lg:my-8 "
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-10 py-3 text-lg md:text-xl font-semibold bg-white text-black rounded-lg shadow-md 
                    transform transition-all duration-300 border border-colorSecundario2 flex items-center gap-2"
                >
                  {cta}
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Imagen derecha */}
          {images[1] && (
            <motion.div
              className="hidden table-lg:flex justify-start table-lg:mb-16 "
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={images[1]}
                alt={title}
                width={500}
                height={500}
                className="max-h-64 object-contain rounded-lg"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
