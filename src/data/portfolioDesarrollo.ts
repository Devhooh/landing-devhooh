export interface TechDates {
  icon: string;
  title: string;
  description: string;
}

export interface DataPortfolio {
  proceso?: TechDates[];
}

export const portfolioDesarrollo: DataPortfolio = {
  proceso: [
    { 
      icon: "ClipboardList", 
      title: "Briefing y análisis inicial", 
      description: "Nos reunimos con el cliente para entender a fondo sus necesidades, objetivos y el público al que quiere llegar. Definimos el alcance y establecemos las bases del proyecto." 
    },
    { 
      icon: "Map", 
      title: "Planificación y arquitectura", 
      description: "Creamos una hoja de ruta clara: estructura del sitio o app, definición del stack tecnológico y calendarización de las fases del desarrollo." 
    },
    { 
      icon: "PenTool", 
      title: "Diseño UI/UX a medida", 
      description: "Convertimos las ideas en interfaces modernas, intuitivas y atractivas. Cada detalle se trabaja para garantizar una experiencia fluida y diferenciadora." 
    },
    { 
      icon: "Code", 
      title: "Desarrollo e integración", 
      description: "Implementamos el diseño con tecnologías actuales (React, Next.js, Tailwind, etc.), optimizando rendimiento, seguridad y escalabilidad desde el inicio." 
    },
    { 
      icon: "Activity", 
      title: "Pruebas, entrega y soporte", 
      description: "Realizamos testing exhaustivo, ajustamos los últimos detalles y lanzamos el proyecto en producción. Acompañamos con soporte post-entrega para asegurar su crecimiento." 
    },
  ],
};
