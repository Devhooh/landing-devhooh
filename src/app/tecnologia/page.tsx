import ContactCTA from "@/components/ui/ContactCTA";
import HeroSection from "@/components/ui/HeroSection";
import FeaturedSection from "@/sections/tech/FeaturedSection";
import IntroSection from "@/sections/tech/IntroSection";
import TechDataSection from "@/sections/tech/TechDataSectionD";

export default function Tecnologia() {
  return (
    <div>
      <HeroSection 
        title="La tecnología detrás de nuestras soluciones de vanguardia" 
        subtitle="Donde los frameworks y la innovación de productos se unen con la experiencia técnica." 
        cta="Construyamos tu producto" 
        imageSrc="/assets/images/slide3.png"
        imageAlt="Ilustración de equipo de desarrollo"
        ctaLink="/contact" 
        layout="left"        
      />

      <IntroSection/>
      
      <TechDataSection/>

      <FeaturedSection/>

      <ContactCTA/>

    </div>
  )
}