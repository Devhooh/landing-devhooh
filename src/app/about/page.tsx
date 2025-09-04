import AboutSection from "@/sections/about/AboutSection";
import CTAAbout from "@/sections/about/CTAAbout";
import HeroAbout from "@/sections/about/HeroAbout";
import OurValuesSection from "@/sections/about/OurValuesSection";
import ProblemsSection from "@/sections/about/ProblemsSection";
import WhyChooseUsSection from "@/sections/about/WhyChooseUsSection";

export default function About() {
  return (
    <div>

      <HeroAbout/>

      <AboutSection/>

      <OurValuesSection/>

      <WhyChooseUsSection/>

      <ProblemsSection/>

      <CTAAbout/>
    </div>
  )
}