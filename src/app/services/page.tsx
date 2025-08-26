import CaroulselSection from "@/sections/services/CaroulselSection";
import ServicesCardsSection from "@/sections/services/ServicesCardsSection";
import ServicesSection from "@/sections/services/ServicesSection";
import { customDevelopmentCardData, DesignerQACardData, InfraestructureSupportCardData, ServicesIACardData } from "@/data/servicesData";
import ContactCTA from "@/components/ui/ContactCTA";
import { ServicesSliderProjects } from "@/sections/services/ServicesSliderProjects";
import FAQSection from "@/sections/portfolio/FAQSection";
import { faqDataServices } from "@/data/faqDataServices";
import { projectsData } from "@/data/portfolioData";

export default function Services() {
  return (
    <div className="flex flex-col">
      <ServicesSection/>
      <ServicesCardsSection/>

      <div className="w-full bg-purple-800/40 py-10 overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-6 space-y-10">

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
        title="Proyectos que usaron nuestros servicios" 
        projects={projectsData}
        showService={true}
      />

      <FAQSection itemsDate={faqDataServices}/>

      <ContactCTA/>
    </div>
  )
}