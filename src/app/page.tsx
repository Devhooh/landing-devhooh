import ContactCTA from "@/components/ui/ContactCTA";
import HeroSection from "@/components/ui/HeroSection";
import { SolutionsSection } from "@/sections/home/SolutionsSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Desarrollamos software inteligente a tu medida"
        subtitle="Creamos soluciones web, móviles y empresariales, integrando inteligencia artificial para optimizar tu negocio."
        cta="Hablemos de tu proyecto"
        ctaLink="/contact"
        imageSrc="/assets/images/hero1.png" // Asegúrate de tener estas imágenes
        imageAlt="Ilustración de equipo de desarrollo"
        layout="left"
      />

      <SolutionsSection/>

      <ContactCTA/>

    </div>
  );
}
