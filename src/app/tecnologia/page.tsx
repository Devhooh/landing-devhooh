import CTATech from "@/sections/tech/CTATech";
import FeaturedSection from "@/sections/tech/FeaturedSection";
import HeroSectionTech from "@/sections/tech/HeroSectionTech";
import IntroSection from "@/sections/tech/IntroSection";
import TechDataSection from "@/sections/tech/TechDataSectionD";
import TechProjectSection from "@/sections/tech/TechProjectSection";

export default function Tecnologia() {
  return (
    <div className="bg-colorPrimario3">
      <HeroSectionTech/>

      <IntroSection/>
      
      <TechDataSection/>

      <FeaturedSection/>

      <TechProjectSection/>

      <CTATech/>

    </div>
  )
}