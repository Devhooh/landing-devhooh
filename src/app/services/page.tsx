import CaroulselSection from "@/sections/services/CaroulselSection";
import ServicesCardsSection from "@/sections/services/ServicesCardsSection";
import { customDevelopmentCardData, DesignerQACardData, InfraestructureSupportCardData, ServicesIACardData } from "@/data/servicesData";
import { ServicesSliderProjects } from "@/sections/services/ServicesSliderProjects";
import FAQSection from "@/components/ui/FAQSection";
import { faqDataServices } from "@/data/faqDataServices";
import { projectsData } from "@/data/portfolioData";
import HeroSlider from "@/sections/services/HeroSliderSection";
import CTAServices from "@/sections/services/CTAServices";
import GarantiasSection from "@/sections/services/GarantiasSection";
import BeneficiosSection from "@/sections/services/BeneficiosSection";
import ReviewSection from "@/sections/services/ReviewSection";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* <ServicesHeroSection/> */}

      <HeroSlider/>

      <ServicesCardsSection/>

      <div className="w-full bg-white py-16 overflow-hidden">
        <div className="w-full mx-auto space-y-16">

          <CaroulselSection
            title="Desarrollo Personalizado"
            features={[
              { icon: "Zap", text: "Rendimiento optimizado" },
              { icon: "Shield", text: "Seguridad empresarial" },
              { icon: "Layers", text: "Escalabilidad garantizada" },
            ]}
            cardData={customDevelopmentCardData}
          />
          <CaroulselSection
            title="Servicios de IA"
            features={[
              { icon: "Bot", text: "Automatización de procesos" },
              { icon: "BarChart3", text: "Análisis predictivo" },
              { icon: "MessageSquare", text: "Chatbots y asistentes virtuales" },
            ]}
            cardData={ServicesIACardData}
          />
          <CaroulselSection
            title="Infraestructura y Soporte"
            features={[
              { icon: "Cloud", text: "Soluciones en la nube" },
              { icon: "ShieldCheck", text: "Monitoreo 24/7" },
              { icon: "Cog", text: "Mantenimiento continuo" },
            ]}
            cardData={InfraestructureSupportCardData}
          />
          <CaroulselSection
            title="Diseño y QA"
            features={[
              { icon: "Palette", text: "Interfaces modernas" },
              { icon: "FlaskConical", text: "Pruebas automatizadas" },
              { icon: "Smartphone", text: "Diseño responsive" },
            ]}
            cardData={DesignerQACardData}
          />
        </div>
      </div>

      <GarantiasSection/>

      <ServicesSliderProjects 
        subtitle="Desde software personalizado y aplicaciones móviles hasta inteligencia artificial y diseño web. Cada caso refleja cómo ayudamos a empresas a innovar y crecer."
        projects={projectsData}
        showService={true}
      />

      <BeneficiosSection/>

      <ReviewSection/>

      <CTAServices/>

      <FAQSection 
        title="Preguntas de nuestros servicios"
        description="¿Tiene preguntas sobre nuestros servicios digitales? Explore nuestra sección de preguntas frecuentes o póngase en contacto con nosotros."
        itemsDate={faqDataServices}
      />
    </div>
  )
}