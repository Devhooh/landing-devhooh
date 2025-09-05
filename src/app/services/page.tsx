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
        <div className="w-full mx-auto space-y-16">

          <CaroulselSection
            title="Desarrollo Personalizado"
            subtitle="Soluciones hechas a la medida de tu negocio"
            features={[
              { icon: "Zap", text: "Rendimiento optimizado" },
              { icon: "Shield", text: "Seguridad empresarial" },
              { icon: "Layers", text: "Escalabilidad garantizada" },
            ]}
            cardData={customDevelopmentCardData}
          />
          <CaroulselSection
            title="Servicios de IA"
            subtitle="Transforma tus datos en decisiones inteligentes"
            features={[
              { icon: "Bot", text: "Automatización de procesos" },
              { icon: "BarChart3", text: "Análisis predictivo" },
              { icon: "MessageSquare", text: "Chatbots y asistentes virtuales" },
            ]}
            cardData={ServicesIACardData}
          />
          <CaroulselSection
            title="Infraestructura y Soporte"
            subtitle="Mantén tu negocio siempre en línea"
            features={[
              { icon: "Cloud", text: "Soluciones en la nube" },
              { icon: "ShieldCheck", text: "Monitoreo 24/7" },
              { icon: "Cog", text: "Mantenimiento continuo" },
            ]}
            cardData={InfraestructureSupportCardData}
          />
          <CaroulselSection
            title="Diseño y QA"
            subtitle="Experiencias atractivas y de calidad asegurada"
            features={[
              { icon: "Palette", text: "Interfaces modernas" },
              { icon: "FlaskConical", text: "Pruebas automatizadas" },
              { icon: "Smartphone", text: "Diseño responsive" },
            ]}
            cardData={DesignerQACardData}
          />
        </div>
      </div>

      <ServicesSliderProjects 
        title="Proyectos que usaron nuestros servicios: " 
        subtitle="Desde software personalizado y aplicaciones móviles hasta inteligencia artificial y diseño web. Cada caso refleja cómo ayudamos a empresas a innovar y crecer."
        projects={projectsData}
        showService={true}
      />

      <FAQSection itemsDate={faqDataServices}/>

      <CTAServices/>
    </div>
  )
}