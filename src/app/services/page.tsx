import CustomDevelopmentSection from "@/components/ui/CustomDevelopmentSection";
import ServicesCardsSection from "@/components/ui/ServicesCardsSection";
import ServicesSection from "@/components/ui/ServicesSection";
import { customDevelopmentCardData, DesignerQACardData, InfraestructureSupportCardData, ServicesIACardData } from "@/data/servicesData";

export default function Services() {
  return (
    <div className="flex flex-col gap-12">
      <ServicesSection/>
      <ServicesCardsSection/>

      <div className="w-full py-10 bg-indigo-950/90 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex items-center justify-center p-4 rounded-2xl bg-sky-400">
            <h3 className="font-extrabold text-3xl text-center">
              Servicios que ofrecemos
            </h3>
          </div>

          <CustomDevelopmentSection
            title="Desarrollo Personalizado"
            cardData={customDevelopmentCardData}
          />
          <CustomDevelopmentSection
            title="Servicios de IA"
            cardData={ServicesIACardData}
          />
          <CustomDevelopmentSection
            title="Infraestructura y Soporte"
            cardData={InfraestructureSupportCardData}
          />
          <CustomDevelopmentSection
            title="Diseño y QA"
            cardData={DesignerQACardData}
          />
        </div>
      </div>
    </div>
  )
}