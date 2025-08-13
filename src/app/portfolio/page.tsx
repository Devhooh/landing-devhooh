import ContactCTA from "@/components/ui/ContactCTA";
import HeroSection from "@/components/ui/HeroSection";
import PortfolioFilters from "@/sections/portfolio/PortfolioFilters";

export default function Portfolio() {
  return (
    <div>
      <HeroSection 
        title= "De ideas a realidades digitales. Resultados que hablan por sí solos" 
        subtitle="Cada proyecto representa una historia de innovación, colaboración y éxito. Mira cómo ayudamos a crecer negocios con tecnología moderna." 
        cta="Cotiza tu proyecto ahora" 
        ctaLink="/contact"
        imageSrc="/assets/images/hero2.png"
        imageAlt="Desarrollo de softwara, portafolio"
        layout="right"
      
      />

      <PortfolioFilters/>

      <ContactCTA/>

    </div>
  )
}