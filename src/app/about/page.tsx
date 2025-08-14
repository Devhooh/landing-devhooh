import ContactCTA from "@/components/ui/ContactCTA";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/sections/about/AboutSection";
import OurValuesSection from "@/sections/about/OurValuesSection";
import ProblemsSection from "@/sections/about/ProblemsSection";
import WhyChooseUsSection from "@/sections/about/WhyChooseUsSection";

export default function About() {
  return (
    <div>
      <HeroSection 
        title="Somos Devhoo: Tecnología con propósito. Nuestra misión va más allá del software" 
        subtitle="Detrás del código, somos un equipo que escucha, colabora y construye contigo. Conoce quiénes somos y por qué trabajamos diferente."
        cta="Hablemos de tu proyecto"
        ctaLink="/contact"
        layout="center"       
      />

      <AboutSection/>

      <OurValuesSection/>

      <WhyChooseUsSection/>

      <ProblemsSection/>

      <ContactCTA/>

    </div>
  )
}