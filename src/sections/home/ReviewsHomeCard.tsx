import Image from "next/image";
import { Star } from "lucide-react"

interface Review {
  id: number;
  logoUrl: string;
  projectTitle: string;
  reviewBody: string;
  reviewerName: string;
  position: string;
  reviewerProfileUrl: string;
  rating: number;
  quality: number;
  schedule: number;
  cost: number;
  willingnessToRecommend: number;
}

interface TestimonialCardProps {
  testimonial: Review
  variant?: "desktop" | "tablet" | "mobile"
}

export function ReviewsHomeCard({ testimonial, variant = "desktop" }: TestimonialCardProps) {
  const { reviewerName, position, reviewerProfileUrl, rating, reviewBody } = testimonial

  // Render stars based on rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-emerald-400 text-emerald-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  // Different layouts based on variant
  const getCardClasses = () => {
    switch (variant) {
      case "tablet":
        return "w-full max-w-2xl mx-auto"
      case "mobile":
        return "w-full max-w-2xl mx-auto"
      default:
        return "w-full max-w-sm"
    }
  }

  const getContentClasses = () => {
    switch (variant) {
      case "tablet":
        return "p-8"
      case "mobile":
        return "p-6 flex-1 flex flex-col justify-between"
      default:
        return "p-6"
    }
  }

  return (
    <div className={`bg-colorFondo border border-colorHover4 rounded-lg ${getCardClasses()}`}>
      <div className={getContentClasses()}>

        {/* Header with avatar and info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-[2px] rounded-full bg-colorSecundario">
          <Image
            src={reviewerProfileUrl}
            alt={reviewerName}
            width={64}
            height={64}
            sizes="64px"
            loading="lazy"
            className="rounded-full"
          />
        </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm">{reviewerName}</h3>
            <p className="text-gray-500 text-sm">{position}</p>
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex gap-1 mb-4">{renderStars()}</div>

        {/* Testimonial content */}
        <div className="flex-1 flex flex-col justify-between">
          <p className={`text-gray-700 leading-relaxed mb-4 ${variant === "mobile" ? "text-sm" : "text-base"}`}>
            {reviewBody}
          </p>
        </div>
      </div>
    </div>
  )
}
