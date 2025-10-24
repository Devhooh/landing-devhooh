"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { reviewData } from "@/data/reviewData";
import ReviewSectionCard from "@/sections/services/ReviewSectionCard";
import { CardInViewWrapper } from "../ui/CardInViewWrapper";

export default function CardReviewSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="pb-12"
    >
      {reviewData.slice(-3).map((review, index) => (
        <SwiperSlide key={review.id} className="py-5">

          <CardInViewWrapper
            direction="y"
            offset={30}
            delay={0.2}
            transition={{ delay: index * 0.2}}
          >
            <ReviewSectionCard
              reviewBody={review.reviewBody}
              reviewerName={review.reviewerName}
              position={review.position}
              reviewerProfileUrl={review.reviewerProfileUrl}
            />
          </CardInViewWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}