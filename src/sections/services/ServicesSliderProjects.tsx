// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation } from "swiper/modules";
// import ServicesProjects from "./ServicesProjects";
// import { projectsData } from "@/data/portfolioData";

// export function ServicesSliderProjects() {
//   const limit: number = 5;
//   const displayedProjects = projectsData.slice(0, limit);

//   return (
//     <section>
//       <div className="max-w-7xl mx-10 text-left mb-4">
//         <h2 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-bold text-indigo-950">
//           Proyectos que usaron nuestros servicios:
//         </h2>
//       </div>

//       <div className="mx-2">
//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={1.05}
//           spaceBetween={25}
//           navigation
//           loop
//           pagination={{ clickable: true }}
//           breakpoints={{
//             550:  { slidesPerView: 1.2, spaceBetween: 25 },   // md-tablet
//             950:  { slidesPerView: 2.1, spaceBetween: 40 },   // table-lg
//             1150: { slidesPerView: 3,   spaceBetween: 48 },   // lg-table
//           }}
//           className="!px-2 md-tablet:!px-4 table-lg:!px-6"  // gutters en los bordes
//         >
//           {displayedProjects.map((project) => (
//             <SwiperSlide key={project.id} className="flex my-6">
//               <ServicesProjects project={project}/>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ServicesProjects from "./ServicesProjects";
import { Project } from "@/data/portfolioData";

interface ServicesSliderProjectsProps {
  projects: Project[];
  title?: string; // h2 opcional
}

export function ServicesSliderProjects({
  projects,
  title,
}: ServicesSliderProjectsProps) {
  const limit = 5;
  const displayedProjects = projects.slice(0, limit);

  return (
    <section>
      <div className="max-w-7xl mx-10 text-left mb-4">
        <h2 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-bold text-indigo-950">
          {title}
        </h2>
      </div>

      <div className="mx-2">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.05}
          spaceBetween={25}
          navigation
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            550: { slidesPerView: 1.2, spaceBetween: 25 },
            950: { slidesPerView: 2.1, spaceBetween: 40 },
            1150: { slidesPerView: 3, spaceBetween: 48 },
          }}
          className="!px-2 md-tablet:!px-4 table-lg:!px-6"
        >
          {displayedProjects.map((project) => (
            <SwiperSlide key={project.id} className="flex my-6">
              <ServicesProjects project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
