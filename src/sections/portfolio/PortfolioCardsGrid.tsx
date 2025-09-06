"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, Variants } from "framer-motion";

import PortfolioCard from "@/sections/portfolio/PortfolioCard";
import { Project } from "@/data/portfolioData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const gridContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface CardsProps {
  filteredProjects: Project[];
}

export default function PortfolioCardsGrid({ filteredProjects }: CardsProps) {
  // Agrupar en grupos de 3 para el Swiper en móviles
  const chunkArray = (array: Project[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };
  const chunkedProjects = chunkArray(filteredProjects, 3);

  return (
    <section className="bg-colorHover5 py-5 rounded-xl">
      {/* Grid para PC */}
      <motion.div
        className="hidden table-lg:grid grid-cols-1 mx-2 md-tablet:mx-8 table-lg:grid-cols-2 gap-8 mt-8"
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={cardItem}>
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Swiper para tablets y móviles */}
      <div className="block table-lg:hidden mt-8">
        {chunkedProjects.map((chunk, index) => (
          <motion.div
            key={index}
            className="mb-8"
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-full"
              slidesPerView={1} // SOLO 1 card por slider
              spaceBetween={20}
            >
              {chunk.map((project) => (
                <SwiperSlide key={project.id} className="p-2">
                  <motion.div variants={cardItem}>
                    <PortfolioCard project={project} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
