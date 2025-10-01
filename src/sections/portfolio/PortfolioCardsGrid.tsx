"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, Variants } from "framer-motion";

import PortfolioCard from "@/sections/portfolio/PortfolioCard";
import { Project } from "@/data/portfolioData";
import { ArrowLeft, ArrowRight } from "lucide-react";

const gridContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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
    <section className="bg-colorHover3/60 w-full pt-8 pb-8 md-tablet:pb-14 rounded-3xl">
      {/* Grid para PC */}
      <motion.div
        className="hidden table-lg:grid grid-cols-1 mx-2 md-tablet:mx-8 table-lg:grid-cols-2 gap-8 mt-8 "
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={cardItem}>
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Swiper para tablets y móviles */}
      <div className="block table-lg:hidden mt-8 px-2 md-tablet:px-5">
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
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
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

              {/* Botones custom */}
              <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-3 rounded-full">
                <ArrowLeft className="w-6 h-6 text-white" />
              </div>
              <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-3 rounded-full">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>

            </Swiper>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
