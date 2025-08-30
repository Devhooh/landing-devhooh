import ContactCTA from "@/components/ui/ContactCTA";
import AboutSection from "@/sections/about/AboutSection";
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

      <ContactCTA/>

    </div>
  )
}