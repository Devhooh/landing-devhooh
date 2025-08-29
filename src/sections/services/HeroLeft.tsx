"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface HeroLeftProps {
  title: string;
  subtitle: string;
  cta: string;
  images: string;
  features?: string[];
}

export default function HeroLeft({
  title,
  subtitle,
  cta,
  images,
  features = [],
}: HeroLeftProps) {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.div
            className="order-1 mt-6 table-lg:mt-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md-tablet:text-4xl font-extrabold text-indigo-950 leading-tight text-center table-lg:text-left">
              {title}
            </h2>
          </motion.div>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            className="order-2 my-5 table-lg:order-2 table-lg:row-span-4 flex justify-center"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={images}
              alt={title}
              width={500}
              height={500}
              priority
              className="w-72 md-tablet:w-96 h-auto object-contain rounded-2xl"
            />
          </motion.div>

          {/* --- 3) SUBTÍTULO --- */}
          <motion.div
            className="order-3 mb-5 table-lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg md-tablet:text-xl text-gray-700 text-center table-lg:text-left leading-relaxed max-w-xl mx-auto table-lg:mx-0">
              {subtitle}
            </p>
          </motion.div>

          {/* --- 4) LISTA --- */}
          <motion.ul
            className="order-4 flex justify-center table-lg:justify-start flex-col space-y-4 text-gray-800 text-left table-lg:text-left max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0"
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Star className="w-6 h-6 text-fuchsia-500 flex-shrink-0" />
                <span className="text-base md-tablet:text-lg">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* --- 5) BOTÓN --- */}
          <motion.div
            className="order-5 flex justify-center table-lg:justify-start py-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg md-tablet:text-xl font-semibold bg-fuchsia-500 text-white rounded-2xl shadow-md hover:bg-fuchsia-600 transform transition-all duration-300"
              >
                {cta}
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
