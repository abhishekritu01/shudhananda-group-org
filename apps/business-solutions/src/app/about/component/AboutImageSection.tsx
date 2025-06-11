'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  { id: 1, src: "/sbplteam/ppa.jpeg", alt: "PPA" },
  { id: 2, src: "/sbplteam/sbpl1.JPG", alt: "SBPL1" },
  { id: 3, src: "/sbplteam/sbpl.JPG", alt: "SBPL" }
]

const AboutImageSection = () => {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-5/2 w-full object-cover xl:rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AboutImageSection
