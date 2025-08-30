import ContactCTA from "@/components/ui/ContactCTA";
import FAQSection from "@/sections/portfolio/FAQSection";
import PortfolioFilters from "@/sections/portfolio/PortfolioFilters";
import ReviewsSection from "@/sections/portfolio/ReviewSection";
import { faqData} from '@/data/faqData';
import HeroSectionPort from "@/sections/portfolio/HeroSectionPort";

export default function Portfolio() {
  return (
    <div>

      <HeroSectionPort/>

      <PortfolioFilters/>

      <ReviewsSection/>

      <FAQSection itemsDate={faqData}/>

      <ContactCTA/>

    </div>
  )
}