import ServicesCardsSection from "@/components/ui/ServicesCardsSection";
import ServicesSection from "@/components/ui/ServicesSection";

export default function Services() {
  return (
    <div className="flex flex-col gap-12">
      <ServicesSection/>
      <ServicesCardsSection/>
    </div>

  )
}