"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import SkeletonLoaderImage from "../../../_components/SkeletonLoaderImage";

export default function SlideNavigation({ data }) {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
              <div className="relative mx-auto w-full h-96 md:w-3/4  md:h-[300px]">
                <SkeletonLoaderImage />
                <Image loading="lazy" quality={100} className="w-full h-full object-cover rounded-lg border-4" src={data?.images.jpg.large_image_url} fill alt={data.title} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="p-4">
                  <p>Penjelasan atau teks penjelasan di sini. Sesuaikan dengan konten yang sesuai.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
