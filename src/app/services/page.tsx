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

      <div className="w-full py-10 bg-purple-950/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex justify-center">
            <div className="w-fit py-8 px-8 rounded-2xl bg-fuchsia-400/50">
              <h3 className="font-extrabold text-gray-100 text-3xl md-tablet:text-5xl text-center">
                Servicios que ofrecemos
              </h3>
            </div>
          </div>

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