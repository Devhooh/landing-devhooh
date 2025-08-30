"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSectionPort() {
  return (
    <section className="relative w-full h-auto overflow-hidden bg-gradient-to-t from-white to-blue-100">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.div
            className="order-1 table-lg:order-2 mt-10 table-lg:mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold leading-tight text-center table-lg:text-right
              text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-800/80
            ">
              Realidades digitales. Resultados que hablan por sí solos
            </h2>
          </motion.div>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            className="my-10 table-lg:mb-16 order-2 table-lg:order-1 table-lg:row-span-4 flex justify-center table-lg:justify-start"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/assets/images/hero2.png"
              alt="Desarrollo de softwara, portafolio"
              width={500}
              height={500}
              className="w-64 md-tablet:w-80 table-lg:w-96 h-auto object-contain rounded-lg"
            />
          </motion.div>

          {/* --- 3) SUBTÍTULO --- */}
          <motion.div
            className="order-3 mb-5 table-lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md-tablet:text-xl text-gray-700 text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
              Cada proyecto representa una historia de innovación, colaboración y éxito. Mira cómo ayudamos a crecer negocios con tecnología moderna.
            </p>
          </motion.div>

          <motion.div
            className="order-5 flex justify-center table-lg:justify-end mt-10 table-lg:mt-1 mb-5 table-lg:my-8 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 text-lg md-tablet:text-xl font-semibold bg-fuchsia-500 text-white rounded-xl shadow-md hover:bg-fuchsia-600 hover:scale-105 transform transition-all duration-300">
                Cotiza tu proyecto ahora
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

