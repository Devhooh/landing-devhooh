import { LucideIcon } from "lucide-react";
import { Code, Globe, Rocket, Shield, Users, Zap } from "lucide-react";

export interface Beneficio {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DataTech {
  id: number;
  slug: string;
  color: string;
  title: string;
  subtitle: string;
  image: string;
  beneficios: Beneficio[];
}

// 🔹 Objeto centralizado con todas las tecnologías
export const techData: Record<string, DataTech> = {
  javascript: {
    id: 1,
    slug: "javascript",
    color: "text-yellow-500",
    title: "JavaScript",
    subtitle:
      "El lenguaje estándar universal para aplicaciones web, flexible y dinámico en todas partes.",
    image: "/assets/images/slide1.png",
    beneficios: [
      { icon: Code, title: "Lenguaje universal", description: "Se usa tanto en frontend como backend." },
      { icon: Globe, title: "Ecosistema amplio", description: "Miles de librerías y frameworks disponibles." },
      { icon: Rocket, title: "Alto rendimiento", description: "Motores como V8 hacen que corra rápido." },
      { icon: Shield, title: "Soporte continuo", description: "Comunidad enorme y soporte de grandes empresas." },
      { icon: Users, title: "Comunidad activa", description: "Millones de desarrolladores comparten conocimiento." },
      { icon: Zap, title: "Productividad", description: "Permite crear prototipos y productos rápido." },
    ],
  },
  typescript: {
    id: 2,
    slug: "typescript",
    color: "text-blue-600",
    title: "TypeScript",
    subtitle:
      "Superconjunto de JavaScript que agrega tipado estático, ideal para proyectos grandes y mantenibles.",
    image: "/assets/images/slide2.png",
    beneficios: [
      { icon: Code, title: "Tipado estático", description: "Reduce errores y mejora la productividad." },
      { icon: Globe, title: "Ecosistema amplio", description: "Compatible con casi todas las librerías de JS." },
      { icon: Rocket, title: "Escalabilidad", description: "Facilita el desarrollo de proyectos grandes." },
      { icon: Shield, title: "Soporte de Microsoft", description: "Respaldo oficial y mejoras constantes." },
      { icon: Users, title: "Comunidad activa", description: "Gran adopción en la industria." },
      { icon: Zap, title: "Mejor DX", description: "Autocompletado e IntelliSense potenciado." },
    ],
  },
  // 🔹 Aquí podrías seguir con Flutter, React, etc...
};
