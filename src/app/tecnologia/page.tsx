import { faqDataTech } from "@/data/faqDataTech";
import FAQSection from "@/sections/portfolio/FAQSection";
import CTATech from "@/sections/tech/CTATech";
import FeaturedSection from "@/sections/tech/FeaturedSection";
import HeroSectionTech from "@/sections/tech/HeroSectionTech";
import IntroSection from "@/sections/tech/IntroSection";
import TechDataSection from "@/sections/tech/TechDataSectionD";
import TechMetricSection from "@/sections/tech/TechMetricSection";
import TechProjectSection from "@/sections/tech/TechProjectSection";

export default function Tecnologia() {
  return (
    <div className="bg-colorFondo">
      <HeroSectionTech/>

      <IntroSection/>
      
      <TechDataSection/>

      <TechMetricSection/>

      <FeaturedSection/>

      <TechProjectSection/>

      <CTATech/>

      <FAQSection itemsDate={faqDataTech}/>

    </div>
  )
}