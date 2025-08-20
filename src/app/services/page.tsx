import CaroulselSection from "@/sections/services/CaroulselSection";
import ServicesCardsSection from "@/sections/services/ServicesCardsSection";
import ServicesSection from "@/sections/services/ServicesSection";
import { customDevelopmentCardData, DesignerQACardData, InfraestructureSupportCardData, ServicesIACardData } from "@/data/servicesData";
import ContactCTA from "@/components/ui/ContactCTA";
import { ServicesSliderProjects } from "@/sections/services/ServicesSliderProjects";
import FAQSection from "@/sections/portfolio/FAQSection";
import { faqDataServices } from "@/data/faqDataServices";

export default function Services() {
  return (
    <div className="flex flex-col gap-10">
      <ServicesSection/>
      <ServicesCardsSection/>

      <div className="w-full py-10 bg-indigo-950/90 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex items-center justify-center py-8 rounded-2xl bg-sky-400">
            <h3 className="font-extrabold text-3xl table-lg:text-5xl text-center">
              Servicios que ofrecemos
            </h3>
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

      <ServicesSliderProjects/>

      <FAQSection itemsDate={faqDataServices}/>

      <ContactCTA/>
    </div>
  )
}