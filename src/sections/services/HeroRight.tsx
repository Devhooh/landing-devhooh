"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroRightProps {
  title: string;
  subtitle: string;
  cta: string;
  images: string;
  features?: string[];
}

export default function HeroRight({ title, subtitle, cta, images, features = [] }: HeroRightProps) {
  return (
    <section className="relative w-full h-auto overflow-hidden">
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
            <h2 className="text-4xl font-extrabold leading-tight text-center table-lg:text-right text-white">
              {title}
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
              src={images}
              alt={title}
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
            <p className="text-lg md-tablet:text-xl text-gray-200 text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
              {subtitle}
            </p>
          </motion.div>

          {/* --- 4) LISTA --- */}
          <motion.div
            className="order-4 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            {features.length > 0 && (
              <ul className="space-y-3 text-white text-left max-w-md mx-auto table-lg:mx-0">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-base md-tablet:text-xl">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* --- 5) BOTÓN --- */}
          <motion.div
            className="order-5 flex justify-center table-lg:justify-end mt-10 table-lg:mt-1 mb-5 table-lg:my-8 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/contact">
              <button className="
                px-10 py-3 text-lg md-tablet:text-xl font-semibold bg-white text-black rounded-lg shadow-md hover:scale-105
                transform transition-all duration-300 border border-colorSecundario2">
                {cta}
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

