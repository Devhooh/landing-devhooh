// "use client";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";

// // Variantes según dirección
// const cardVariants: Variants = {
//   hiddenLeft: { opacity: 0, x: -15 },
//   hiddenRight: { opacity: 0, x: 15 },
//   show: { opacity: 1, x: 0 },
// };

// // El texto saldra uno por uno
// const letterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// const splitText = (text: string) => text.split("");

// export default function WhyChooseUsSection() {
//   const features = [
//     {
//       title: "Entregas rápidas y confiables",
//       description:
//         "Cumplimos plazos y garantizamos que tu proyecto esté listo para despegar sin retrasos.",
//       image: "/assets/icons/fast.png",
//       alt: "Entregas rápidas y confiables",
//     },
//     {
//       title: "Soluciones a medida",
//       description:
//         "Cada proyecto es único. Diseñamos estrategias y software que se adaptan exactamente a lo que necesitas.",
//       image: "/assets/icons/solution.png",
//       alt: "Soluciones a medida",
//     },
//     {
//       title: "Trabajo colaborativo",
//       description:
//         "Te mantenemos al tanto en cada fase con metodologías ágiles y comunicación clara.",
//       image: "/assets/icons/collaborative.png",
//       alt: "Trabajo colaborativo",
//     },
//     {
//       title: "Seguridad y calidad",
//       description:
//         "Aplicamos buenas prácticas para asegurar que tu producto sea confiable, escalable y protegido.",
//       image: "/assets/icons/securities.png",
//       alt: "Seguridad y calidad",
//     },
//     {
//       title: "Crecimiento garantizado",
//       description:
//         "Creamos soluciones que no solo funcionan, sino que ayudan a que tu negocio evolucione y escale.",
//       image: "/assets/icons/guaranteed.png",
//       alt: "Crecimiento garantizado",
//     },
//   ];

//   return (
//     <section className="bg-white py-8 px-4 md-tablet:px-8">
//       <div className="container mx-auto max-w-7xl text-center">

//         <motion.h2
//           className="
//           text-4xl md-tablet:text-5xl font-extrabold py-12
//           bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-purple-400"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
//         >
//           {splitText("¿Por qué elegir a Devhoo?").map((letter, idx) => (
//             <motion.span key={idx} variants={letterVariants}>
//               {letter}
//             </motion.span>
//           ))}
//         </motion.h2>
        
//         {/* Cards */}
//         <div className="flex flex-col gap-8 md-tablet:gap-10 table-lg:gap-12">
//           {features.map((feature, index) => {
//             const isReversed = index % 2 === 1;
//             return (
//               <motion.div
//                 key={index}
//                 className={`flex items-center gap-10 bg-fuchsia-100/70 border-2 border-fuchsia-200 rounded-2xl shadow-2xl 
//                   sm:px-6 md-tablet:px-8 table-lg:px-10 py-4 
//                   mx-2 md-tablet:mx-8 table-lg:mx-32 
//                   transform transition duration-300 hover:bg-fuchsia-200 hover:shadow-2xl
//                   flex-col md-tablet:flex-row ${isReversed ? "md-tablet:flex-row-reverse" : ""}`}
//                 initial={isReversed ? "hiddenRight" : "hiddenLeft"}
//                 whileInView="show"
//                 viewport={{ once: true}}
//                 variants={cardVariants}
//               >
//                 {/* Imagen */}
//                 <div className="flex-shrink-0 w-20 h-20 md-tablet:w-20 md-tablet:h-20 relative">
//                   <Image
//                     src={feature.image}
//                     alt={feature.alt}
//                     width={300}
//                     height={300}
//                     className="object-contain"
//                   />
//                 </div>

//                 {/* Texto */}
//                 <div
//                   className={`flex-grow min-w-0 text-center md-tablet:text-left ${
//                     isReversed ? "md-tablet:text-right" : ""
//                   }`}
//                 >
//                   <h3 className="text-2xl font-bold text-blue-900 m-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-base text-gray-600 m-2">
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animación del título letra por letra
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Animación general escalonada (container → hijos)
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // escalonado entre cards
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const splitText = (text: string) => text.split("");

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Entregas rápidas y confiables",
      description:
        "Cumplimos plazos y garantizamos que tu proyecto esté listo para despegar sin retrasos.",
      image: "/assets/icons/fast.png",
      alt: "Entregas rápidas y confiables",
    },
    {
      title: "Soluciones a medida",
      description:
        "Cada proyecto es único. Diseñamos estrategias y software que se adaptan exactamente a lo que necesitas.",
      image: "/assets/icons/solution.png",
      alt: "Soluciones a medida",
    },
    {
      title: "Trabajo colaborativo",
      description:
        "Te mantenemos al tanto en cada fase con metodologías ágiles y comunicación clara.",
      image: "/assets/icons/collaborative.png",
      alt: "Trabajo colaborativo",
    },
    {
      title: "Seguridad y calidad",
      description:
        "Aplicamos buenas prácticas para asegurar que tu producto sea confiable, escalable y protegido.",
      image: "/assets/icons/securities.png",
      alt: "Seguridad y calidad",
    },
    {
      title: "Crecimiento garantizado",
      description:
        "Creamos soluciones que no solo funcionan, sino que ayudan a que tu negocio evolucione y escale.",
      image: "/assets/icons/guaranteed.png",
      alt: "Crecimiento garantizado",
    },
  ];

  return (
    <section className="bg-white py-8 px-4 md-tablet:px-8">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Título animado letra por letra */}
        <motion.h2
          className="text-4xl md-tablet:text-5xl font-extrabold py-12
          bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-purple-400"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("¿Por qué elegir a Devhoo?").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Cards animadas desde abajo en escalonado */}
        <motion.div
          className="flex flex-col gap-8 md-tablet:gap-10 table-lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center gap-10 bg-fuchsia-100/70 border-2 border-fuchsia-200 rounded-2xl shadow-2xl 
                sm:px-6 md-tablet:px-8 table-lg:px-10 py-4 
                mx-2 md-tablet:mx-8 table-lg:mx-32 
                transform transition duration-300 hover:bg-fuchsia-200 hover:shadow-2xl
                flex-col md-tablet:flex-row"
            >
              {/* Imagen */}
              <div className="flex-shrink-0 w-20 h-20 md-tablet:w-20 md-tablet:h-20 relative">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>

              {/* Texto */}
              <div className="flex-grow min-w-0 text-center md-tablet:text-left">
                <h3 className="text-2xl font-bold text-blue-900 m-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 m-2">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
