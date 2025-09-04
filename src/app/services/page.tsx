import CaroulselSection from "@/sections/services/CaroulselSection";
import ServicesCardsSection from "@/sections/services/ServicesCardsSection";
import { customDevelopmentCardData, DesignerQACardData, InfraestructureSupportCardData, ServicesIACardData } from "@/data/servicesData";
import { ServicesSliderProjects } from "@/sections/services/ServicesSliderProjects";
import FAQSection from "@/sections/portfolio/FAQSection";
import { faqDataServices } from "@/data/faqDataServices";
import { projectsData } from "@/data/portfolioData";
import HeroSlider from "@/sections/services/HeroSlider";
import CTAServices from "@/sections/services/CTAServices";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* <ServicesHeroSection/> */}

      <HeroSlider/>

      <ServicesCardsSection/>

      <div className="w-full bg-white py-16 overflow-hidden">
        <div className="max-w-[1550px] mx-auto md-tablet:px-6 space-y-16">

          <CaroulselSection
            title="Desarrollo Personalizado"
            cardData={customDevelopmentCardData}
          />
          <CaroulselSection
            title="Servicios de IA"
            cardData={ServicesIACardData}
          />
          <CaroulselSection
            title="Infraestructura y Soporte"
            cardData={InfraestructureSupportCardData}
          />
          <CaroulselSection
            title="Diseño y QA"
            cardData={DesignerQACardData}
          />
        </div>
      </div>

      <ServicesSliderProjects 
        title="Proyectos que usaron nuestros servicios: " 
        projects={projectsData}
        showService={true}
      />

      <FAQSection itemsDate={faqDataServices}/>

      <CTAServices/>
    </div>
  )
}